import "./Competition.css";
import HeroOther from "../../components/heroOther/HeroOther";
import Title from "../..//components/title/Title";
import ActivityCard from "../../components/activitycard/ActivityCard";
import Search from "../../components/search/Search";
import ProductFilter from "../../components/productFilter/ProductFilter";

export default function Competition() {
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
    <div className="competition">
      <HeroOther
        title={"competition"}
        backgroundImage={require("../../images/Rectangle 65 (1).png")}
      />
      <div className="container">
        <div className="search-other">
          <Search filter={<ProductFilter />} />
        </div>
        <div className="competition-activity activity-margin">
          <Title title={"Compitition all over world"} heading={"competition"} />
          <div className="category">
            <button className="active">Sky</button>
            <button>Land</button>
            <button>Water</button>
          </div>
          <div className="competition-timing">
            <button>Closed Competition</button>
            <button className="active">Current Competition</button>
            <button>Upcoming Competition</button>
          </div>
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
