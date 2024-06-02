import React from 'react';
import './ratingStyles.css';

const ChangeRating = ({ rating, handleRating }) => {
  return (
    <input
      type="number"
      step="0.5"
      min="0"
      max="5"
      value={rating}
      onChange={(e) => {
        const inputValue = parseFloat(e.target.value);
        if (inputValue > 5) {
          alert("Input numbers in between 0 and 5 only ;)");
        } else {
          handleRating(inputValue);
        }
      }}
    />
  );
};

export default ChangeRating;
