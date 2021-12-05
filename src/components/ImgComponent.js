import logo_instagram from "../images/logo_instagram.png"
import "../styles/ImgLogoStyle.css"


export default function ImgComponent(){
    return(<div className="container_imgcomponent">
        <img src={logo_instagram} alt='logo_instagram'/>
    </div>)
}