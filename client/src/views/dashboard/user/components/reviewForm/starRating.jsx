import React from "react";

const maxStars = 5;

const StarRating = ({ stars }) => {
  const starPercentage = (stars / maxStars) * 100;
  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = {
    width: `${starPercentageRounded}%`
  };

  return (
    <div className="stars-gray">
      <div className="stars-yellow" style={StarStyles}></div>
    </div>
  );
};

export default StarRating;
