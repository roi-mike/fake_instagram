import ImgComponent from "../components/ImgComponent";
import InputComponent from "../components/InputComponent";
import BtnConnectionComponent from "../components/btnConnectionComponent";

import "../styles/indexHomeStyle.css";
import GameHomeComponent from "../components/GameHomeComponent";
import { Component } from "react";

export default class IndexHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//   componontDidMount() {}

//   componentWillUnMount() {}

  render() {
    return (
      <div className="container_home">
        {/*CONTAINER*/}
        <div className="container_center_home">
          {/*CONTAINER CENTER*/}
          <div className="container_presentation">
            {/*PRESENTATION*/}
            <div className="container_img_presentation">
              <div className="container_center_img_presentation">
                <GameHomeComponent />
              </div>
            </div>

            <div className="container_authenticate">
              {/*CONTAINER AUTHENTICATE*/}
              <div className="container_logo_authenticate">
                <ImgComponent />
              </div>
              <div className="container_login_authenticate">
                <InputComponent />
                <InputComponent />
                <BtnConnectionComponent />
                <p>OU</p>
                <p>Se connecter avec Facebook</p>
                <p>Mot de passer oublié</p>
              </div>
              <div className="presentation_other_proposal">
                <p>
                  Vous avez pas de compte ? <span>Inscrivez-vous</span>
                </p>
              </div>
              <div className="presentation_other_proposal_donwload_app">
                <p>Télécharger l'application</p>
                <a href="www.google.com">
                  <span> Android</span>
                </a>
                <a href="www.apple.com">
                  <span> Apple</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            {/*FOOTER*/}
            <div>
              <span>Meta</span>
              <span>À propos</span>
              <span>Blog</span>
              <span>Emplois</span>
              <span>Aide</span>
              <span>API</span>
              <span>Confidencialité</span>
              <span>Condition</span>
              <span>Comptes principaux</span>
              <span>HashTag</span>
              <span>Lieu</span>
              <span>Instagram</span>
              <span>Life</span>
            </div>

            <div>
              <span>Beauté</span>
              <span>Danse</span>
              <span>Fitness</span>
              <span>Alimentation et boissons</span>
              <span>Maison et jadin</span>
              <span>Musique</span>
              <span>Art visuel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
