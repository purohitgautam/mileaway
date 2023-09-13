import "./Title.css";

export default function Title({ title, heading }) {
  return (
    <div className="titles">
      <h4>{title}</h4>
      <span>{heading}</span>
    </div>
  );
}
