// import { ReactComponent as Rectangle123 } from "../../images/Rectangle 123.svg";
import { ReactComponent as Like } from "../../images/Group.svg";
import { ReactComponent as Comment } from "../../images/Group (1).svg";
import "./VideoEngagement.css";
import { ReactComponent as Share } from "../../images/Group (2).svg";

export default function VideoEngagement() {
  return (
    <div className="video-engagement">
      {/* <div className="rectangle123">
        <Rectangle123 />
      </div> */}
      <div className="details">
        <div className="like">
          <Like />
          <span>1012</span>
        </div>
        <div className="comment">
          <Comment />
          <span>Comment</span>
        </div>
        <div className="share">
          <Share />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
