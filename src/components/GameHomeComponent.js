import React, {useEffect, useRef, useState} from "react";

import "../styles/gameHomeComponentStyle.css";

export default function GameHomeComponent() {
    
    const canvasRef = useRef(null);
    var [state, setstate] = useState(50)

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle= "green"
      ctx.fillRect(canvas.width/2,125, 20, 20)
    },[]);

    window.addEventListener('keydown', (event) => {
        /*Droite*/
        if(event.keyCode === 39){
            setstate(state += 1)
        /*GAUCHE*/
        }else if(event.keyCode === 37){
            setstate(state -= 1)
        }
      });

  return (
    <div className="gamehome">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
