import "./Plan.css";
import { ReactComponent as ListStyle } from "../../images/check-circle-1.svg";

export default function Plan({ price, title }) {
  return (
    <div className="plan">
      <div className="price">
        <span>{price}</span>
        <span>/month</span>
      </div>
      <p className="title">{title}</p>
      <p className="description">
        For most businesses that want to otpimize web queries
      </p>
      <div>
        <ul>
          <li>
            <ListStyle />
            <span>All limited links</span>
          </li>
          <li>
            <ListStyle />
            <span>Own analytics platfo</span>
          </li>
          <li>
            <ListStyle />
            <span>Chat support</span>
          </li>
          <li>
            <ListStyle />
            <span>Optimize hashtags</span>
          </li>
          <li>
            <ListStyle />
            <span>Unlimited users</span>
          </li>
        </ul>
      </div>
      <div className="choose-plan">
        <button>Choose plan</button>
      </div>
    </div>
  );
}
