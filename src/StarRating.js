import React, { useState } from "react";
import full from "./assets/star-full.svg";
import empty from "./assets/star-empty.svg";
import half from "./assets/star-half.svg";

const StarRating = ({ totalStars, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedStar, isHalf) => {
    // If isHalf is true, subtract 0.5 to set a half-star rating
    const newRating = isHalf ? selectedStar - 0.5 : selectedStar;
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isHalfSelected = rating === starValue - 0.5;
        const isSelected = rating >= starValue || isHalfSelected;

        return (
          <div key={index} style={{ position: "relative", width: "30px", height: "30px" }}>
            {isSelected && !isHalfSelected ? (
              <img
                src={full}
                alt="full-star"
                style={{ width: "30px", height: "30px", position: "absolute", top: 0, left: 0 }}
              />
            ) : isHalfSelected ? (
              <img
                src={half}
                alt="half-star"
                style={{ width: "30px", height: "30px", position: "absolute", top: 0, left: 0 }}
              />
            ) : (
              <img
                src={empty}
                alt="empty-star"
                style={{ width: "30px", height: "30px", position: "absolute", top: 0, left: 0 }}
              />
            )}

            <div
              style={{
                width: "15px",
                height: "30px",
                position: "absolute",
                top: 0,
                left: 0,
                cursor: "pointer",
              }}
              onClick={() => handleClick(starValue, true)}
            ></div>
            <div
              style={{
                width: "15px",
                height: "30px",
                position: "absolute",
                top: 0,
                right: 0,
                cursor: "pointer",
              }}
              onClick={() => handleClick(starValue, false)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
