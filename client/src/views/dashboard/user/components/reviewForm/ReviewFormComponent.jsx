import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../Redux/Actions/actions";

const ReviewFormComponent = ({ roomId }) => {
  const dispatch = useDispatch();
  const [reviewData, setReviewData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview(roomId, reviewData));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  return (
    <form>
      <input type="text" name="comment" onChange={handleChange} />
      <input type="number" name="rating" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Submit review</button>
    </form>
  );
};

export default ReviewFormComponent;
