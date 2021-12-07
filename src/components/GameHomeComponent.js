import React, { useEffect, useRef } from "react";

import "../styles/gameHomeComponentStyle.css";

export default function GameHomeComponent() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const FPS = 30; //frame per second
    const FRICTION = 0.7;//friction coefficient of space (0 = no friction, 1 = lots of friction)
    const SHIP_SIZE = 10; //ship height in pixels
    const SHIP_THRUST = 5; // acceleration of the ship in pixels per second
    const TURN_SPEED = 360; //turn speed in degrees per second

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    var ship = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: SHIP_SIZE / 2, //rayon
      a: (90 / 180) * Math.PI, //angle of the ship convert to radians
      rot: 0,
      thrusting: false,
      thrust: {
        x: 0,
        y: 0,
      },
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    function keyUp(/* @type {KeyBoardEvent} */ ev) {
      switch (ev.keyCode) {
        case 37: //left arrow (stop rotating left)
          ship.rot = 0;
          break;
        case 38: //up arrow (stop thrusting)
          ship.thrusting = false;
          break;
        case 39: //right arrow (stop rotating right)
          ship.rot = 0;
          break;
        default:
          break;
      }
    }

    function keyDown(/* @type {KeyBoardEvent} */ ev) {
      switch (ev.keyCode) {
        case 37: //left arrow (rotate ship left)
          ship.rot = ((TURN_SPEED / 180) * Math.PI) / FPS;
          break;
        case 38: //up arrow (thrusr the ship forward)
          ship.thrusting = true;
          console.log("KEYDOWN");
          break;
        case 39: //right arrow (rotate ship left)
          ship.rot = ((-TURN_SPEED / 180) * Math.PI) / FPS;
          break;
        default:
          break;
      }
    }

    window.setInterval(function () {
      //draw space
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (ship.thrusting) {
        ship.thrust.x += SHIP_THRUST * Math.cos(ship.a)/ FPS;
        ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a)/ FPS;
      }else{ 
        ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
        ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
      }

      //draw ship
      ctx.strokeStyle = "white";
      ctx.lineWidth = SHIP_SIZE / 20;
      ctx.beginPath();
      ctx.moveTo(
        //nose of the ship
        ship.x + (4 / 3) * ship.r * Math.cos(ship.a),
        ship.y - (4 / 3) * ship.r * Math.sin(ship.a)
      );
      ctx.lineTo(
        //rear left
        ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) + Math.sin(ship.a)),
        ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) - Math.cos(ship.a))
      );
      ctx.lineTo(
        //rear right
        ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) - Math.sin(ship.a)),
        ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) + Math.cos(ship.a))
      );
      ctx.closePath();
      ctx.stroke();
      //rotate ship
      ship.a += ship.rot;
      //move the ship
      ship.x += ship.thrust.x;
      ship.y += ship.thrust.y;

      //handle edge of screen
      if(ship.x < 0 - ship.r){
        ship.x = canvas.width + ship.r;
      }else if(ship.x > canvas.width + ship.r){
        ship.x = 0 - ship.r;
      }

      if(ship.y < 0 - ship.r){
        ship.y = canvas.height + ship.r;
      }else if(ship.y > canvas.height + ship.r){
        ship.y = 0 - ship.r;
      }

      //centre dot
      ctx.fillStyle = "red";
      ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
    }, 1000 / FPS);
  }, []);

  return (
    <div className="gamehome">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
