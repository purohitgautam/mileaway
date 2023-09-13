import { StarHalf, StarOutline, StarRate } from "@mui/icons-material";

export default function Rating({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (v, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <StarRate style={{ color: "#FDCC0D" }} />
        ) : stars >= number ? (
          <StarHalf style={{ color: "#FDCC0D" }} />
        ) : (
          <StarOutline style={{ color: "#FDCC0D" }} />
        )}
      </span>
    );
  });
  return (
    <div className="rating">
      <div>{ratingStar}</div>
      {/* <button>{rating}</button> */}
    </div>
  );
}
