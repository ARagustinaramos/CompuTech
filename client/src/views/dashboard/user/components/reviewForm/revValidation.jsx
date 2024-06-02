import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import StarRating from "./starRating";
import ChangeRating from "./ChangeRating";
//import { postReview } from "../../Redux/Actions/actions";
import "./review.css";

const revValidation = ({ email, comment }) => {
  let error = {};

  // Validación de email
  if (!email) {
    error.email = "This field cannot be blank";
  } else if (email.length > 40) {
    error.email = "The length of the email cannot exceed 40 digits";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    error.email = "That email is not valid";
  }

  // Validación de comentario
  if (!comment) {
    error.comment = "This field cannot be blank";
  }

  return error;
};

const ReviewForm = ({ id_Product }) => {
  const dispatch = useDispatch();
  const form = useRef();

  const [values, setValues] = useState({
    user_email: "",
    message: "Wohoo! It looks like you have made a review at one of our hotels. Thank you for your support! :D",
  });

  const [review, setReview] = useState({
    email: values.user_email,
    description: "",
    score: 0,
    date: new Date().toISOString().split("T")[0], // Obtener la fecha actual en formato YYYY-MM-DD
  });

  const [errors, setErrors] = useState({
    email: "",
    comment: "",
  });

  const handleRating = (input) => {
    setReview({
      ...review,
      score: input,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      ...revValidation({ [name]: value }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(postReview(id_Product, review));
    if (!form.current) return;
  };

  return (
    <div className="revContainer">
      <form ref={form} onSubmit={handleSubmit}>
        <h2>Leave a review!</h2>
        <div className="">
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={values.user_email}
            onChange={onChange}
            placeholder="miemail@gmail.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="rating">
          <label>Score:</label>
          <StarRating stars={review.score} />
          <ChangeRating rating={review.score} handleRating={handleRating} />
        </div>

        <div className="description">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={review.description}
            onChange={onChange}
            placeholder="Escribe tu comentario"
          />
          {errors.comment && <p className="error">{errors.comment}</p>}
        </div>

        <div className="date">
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            value={review.date}
            onChange={onChange}
          />
        </div>
        <input
          className="messageInput"
          name="message"
          value={values.message}
          onChange={(e) =>
            setValues((prevValues) => ({
              ...prevValues,
              message: e.target.value,
            }))
          }
        ></input>

        <button type="submit">Send review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
