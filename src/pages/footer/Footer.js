import "./Footer.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/ic_facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/ic_instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../images/ic_linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../images/ic_twitter.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="upper">
          <div className="left">
            <Logo />
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </span>
            <div className="contact">
              <span>Contact Us</span>
              <div className="social-icons">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="operation-1 operation">
              <h3>Our Operations</h3>
              <div>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
              </div>
            </div>
            <div className="operation-2 operation">
              <h3>Our Operations</h3>
              <div>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
                <p>Page name</p>
              </div>
            </div>
            <div className="operation-3 operation">
              <h3>Our Operations</h3>
              <p>News letter</p>
              <div className="form">
                <input type="email" placeholder="Enter email" />
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© Bird Travel PR 2015. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
