import "./Activitycard.css";
export default function ActivityCard({ image, title, description }) {
  return (
    <div className="activity-card">
      <div className="card">
        <div className="image">
          <img src={image} alt="thumbnail" />
        </div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}
