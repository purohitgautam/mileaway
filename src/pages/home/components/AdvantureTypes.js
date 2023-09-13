import React from "react";
import { ReactComponent as WaterLogo } from "../../../images/ic_water.svg";
import { ReactComponent as Line } from "../../../images/Line 17.svg";
import { ReactComponent as RightArrow } from "../../../images/ic_right_arrow.svg";
// import { ReactComponent as Border } from "../../../images/Rectangle 53.svg";

export default function AdvantureTypes() {
  return (
    <div className="other-advantures">
      <WaterLogo className="logo" />
      <span className="title">Water</span>
      <div className="learn-more">
        Learn More
        <Line className="upper-line" />
        <RightArrow className="greaterthan-icon" />
        <Line className="lower-line" />
      </div>
      {/* <Border className="border" /> */}
    </div>
  );
}
