import "./HeroOther.css";
import { ReactComponent as TitleFrame } from "../../images/Frame.svg";

export default function HeroOther({ title, backgroundImage }) {
  return (
    <div className="hero-other">
      <div className="clouds-image">
        <img src={require("../../images/footer-clouds 1.png")} alt="clouds" />
      </div>
      <img className="hero-image" src={backgroundImage} alt="hero" />
      <div className="title">
        <h3>{title}</h3>
        <TitleFrame className="title-frame" />
      </div>
    </div>
  );
}
