import "./TrendingVideos.css";
import { useState } from "react";
import HeroOther from "../../components/heroOther/HeroOther";
import Title from "../../components/title/Title";
import TrendingVideoCard from "../../components/trendingVideoCard/TrendingVideoCard";
import Search from "../../components/search/Search";
import ProductFilter from "../../components/productFilter/ProductFilter";

export default function TrendingVideos() {
  const [category, setCategory] = useState("sky");
  const trendingVideos = [
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "sky" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "land" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
    { type: "water" },
  ];

  const handleSky = () => {
    if (category === "sky") return;
    setCategory("sky");
  };
  const handleLand = () => {
    if (category === "land") return;
    setCategory("land");
  };
  const handleWater = () => {
    if (category === "water") return;
    setCategory("water");
  };

  return (
    <div className="trending">
      <HeroOther
        backgroundImage={require("../../images/Rectangle 65 (2).png")}
        title={"Trending Videos"}
      />

      <div className="container">
        <div className="search-other">
          <Search filter={<ProductFilter />} />
        </div>
        <div className="trending-wrapper">
          <Title title={"Trending Videos"} heading={"Sky"} />
          <div className="category">
            <button
              className={category === "sky" ? "active" : ""}
              onClick={handleSky}
            >
              Sky
            </button>
            <button
              className={category === "land" ? "active" : ""}
              onClick={handleLand}
            >
              Land
            </button>
            <button
              className={category === "water" ? "active" : ""}
              onClick={handleWater}
            >
              Water
            </button>
          </div>
          <div className="trending-videos">
            {trendingVideos
              .filter((video) => video.type === category)
              .map((video, index) => (
                <TrendingVideoCard
                  key={index}
                  thumbnail={require("../../images/Rectangle 55.png")}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
