import AdvantureTypes from "./AdvantureTypes";
import Title from "../../../components/title/Title";

export default function Advantures() {
  return (
    <div className="advantures">
      <div>
        <Title
          title={"DISCOVER TRAVEL THAT STIRS YOUR SOUL"}
          heading={"Adventure Types"}
        />
        <div className="all-advantures">
          <div className="advanture-1">
            <span>Adventure</span>
            <span>
              Redeem miles for travel, gear, or give to conservation efforts.
              Our loyalty program rewards adventure & eco-minded travelers.
            </span>
            <button>Add your Advanture</button>
          </div>
          <div className="all-other-advantures">
            <AdvantureTypes />
            <AdvantureTypes />
            <AdvantureTypes />
            <AdvantureTypes />
            <AdvantureTypes />
            <AdvantureTypes />
          </div>
        </div>
      </div>
    </div>
  );
}
