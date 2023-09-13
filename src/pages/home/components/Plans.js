import React from "react";
import Plan from "../../../components/plan/Plan";
import { ReactComponent as RightIcon } from "../../../images/Path.svg";

export default function Plans() {
  return (
    <div className="plans">
      <Plan price={"$20"} title={"INTRO"} />
      <Plan price={"$20"} title={"INTRO"} />
      <div className="plan pro-plan">
        <div className="most-popular">
          <span>MOST POPULAR</span>
        </div>
        <div className="price">
          <span>$100</span>
          <span>/month</span>
        </div>
        <p className="title">Pro</p>
        <p className="description">
          For most businesses that want to otpimize web queries
        </p>
        <div>
          <ul>
            <li>
              <div className="list-logo">
                <RightIcon className="right-logo" />
              </div>
              <span>All limited links</span>
            </li>
            <li>
              <div className="list-logo">
                <RightIcon className="right-logo" />
              </div>
              <span>Own analytics platfo</span>
            </li>
            <li>
              <div className="list-logo">
                <RightIcon className="right-logo" />
              </div>
              <span>Chat support</span>
            </li>
            <li>
              <div className="list-logo">
                <RightIcon className="right-logo" />
              </div>
              <span>Optimize hashtags</span>
            </li>
            <li>
              <div className="list-logo">
                <RightIcon className="right-logo" />
              </div>
              <span>Unlimited users</span>
            </li>
          </ul>
        </div>
        <div className="choose-plan">
          <button>Choose plan</button>
        </div>
      </div>
      <Plan price={"$20"} title={"INTRO"} />
    </div>
  );
}
