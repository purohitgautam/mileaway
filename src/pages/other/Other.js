import "./Other.css";
import ActivityCard from "../../components/activitycard/ActivityCard";
import HeroOther from "../../components/heroOther/HeroOther";
import ProductFilter from "../../components/productFilter/ProductFilter";
import Search from "../../components/search/Search";
import Title from "../../components/title/Title";

export default function Other() {
  const cards = [
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      image: "../images/Rectangle 130.png",
      title: "Underwater Sport Diving World Championship",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="other">
      <HeroOther
        title={"Other"}
        backgroundImage={require("../../images/Rectangle 65.png")}
      />
      <div className="container">
        <div className="search-other">
          <Search filter={<ProductFilter />} />
        </div>
        <div className="other-activity activity-margin">
          <Title
            title={"Compitition all over world"}
            heading={"Other Activity"}
          />
          <div className="card-container">
            {cards.map((card, index) => (
              <ActivityCard
                key={index}
                image={require("../../images/Rectangle 130.png")}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
