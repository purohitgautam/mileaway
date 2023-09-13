import { ReactComponent as FacebookIcon } from "../../../images/ic_facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../images/ic_instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../../images/ic_linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../../images/ic_twitter.svg";

export default function Hero() {
  return (
    <div className="hero hero-home">
      <img
        className="hero-image"
        src={require("../../../images/Rectangle 34.png")}
        alt="hero"
      />
      <div className="hero-items">
        <span>AT THE GATES OF THE NORTH POLE</span>
        <div className="title">
          <span>Spitsbergen</span>
        </div>
        <button>Learn More</button>
        <div className="social-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}
