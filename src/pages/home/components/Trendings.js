import Title from "../../../components/title/Title";
import TrendingVideoCard from "../../../components/trendingVideoCard/TrendingVideoCard";

export default function Trendings() {
  const trendingVideos = [{}, {}, {}, {}, {}, {}];
  return (
    <div className="trending-home">
      <Title title={"OUR TRENDING"} heading={"Trending"} />
      <div className="add-trend">
        <div>
          <button className="button">Add Trend</button>
        </div>
      </div>
      <div className="trending-videos-home">
        {trendingVideos.map((video, index) => (
          <TrendingVideoCard
            key={index}
            thumbnail={require("../../../images/Rectangle 55.png")}
          />
        ))}
      </div>
      <div className="view-all">
        <button className="button">View All Videos</button>
      </div>
    </div>
  );
}
