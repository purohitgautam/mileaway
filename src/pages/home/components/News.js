import { ReactComponent as FlagLogo } from "../../../images/Group 310.svg";
import Title from "../../../components/title/Title";
export default function News() {
  const news = [
    {
      image: "../../../images/Rectangle 76.png",
      title: "How to Plan the Perfect European Villa Vacation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Rectangle 76.png",
      title: "How to Plan the Perfect European Villa Vacation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
    {
      image: "../../../images/Rectangle 76.png",
      title: "How to Plan the Perfect European Villa Vacation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    },
  ];
  return (
    <div className="news-home">
      <Title title={"OVER NEWS"} heading={"News & Press"} />
      <div className="news">
        {news.map((v, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={require("../../../images/Rectangle 76.png")} alt="" />
            </div>
            <div className="details">
              <h3>{v.title}</h3>
              <span>{v.description}</span>
              <div className="flag">
                <div className="flag-logo">
                  <FlagLogo />
                </div>
                <span>Afghanistan</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
