import "./TrendingVideoCard.css";
import { ReactComponent as PlayButton } from "../../images/ic_play.svg";
import VideoEngagement from "../../components/VideoEngagement/VideoEngagement";

export default function TrendingVideoCard({ thumbnail }) {
  return (
    <div className="trendingvideo-card">
      <img src={thumbnail} alt="thumbnail" />
      <PlayButton className="play-btn" />
      <div className="hover-engagement">
        <VideoEngagement />
      </div>
    </div>
  );
}
