import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import emailjs from "emailjs-com";
import StarRating from "./starRating";
import ChangeRating from "./ChangeRating";
import { revValidation } from "./revValidation";
import { postReview } from "../../Redux/Actions/actions";
import "./review.css";

const ReviewForm = ({ roomId }) => {
  const dispatch = useDispatch();
  const form = useRef();

  const [values, setValues] = useState({
    user_email: "",
    message: `Nos encantaría que nos des tu opinión sobre este producto! :D`,
  });

  const [review, setReview] = useState({
    email: values.user_email,
    description: "",
    score: 0,
    date: new Date().toISOString().split("T")[0], // Obtener la fecha actual en formato YYYY-MM-DD
  });

  const [errors, setErrors] = useState({
    email: "",
    description: "",
  });

  const handleRating = (input) => {
    setReview({
      ...review,
      score: input,
    });
  };

  const onChange = (e) => {
    let { name, value } = e.target;
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
    dispatch(postReview(roomId, review));
    if (!form.current) return;

    emailjs
      .sendForm("service_owcj3ui", "template_0yv2m0n", form.current, {
        publicKey: "mMSNbNNhKTe-H44Fh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="revContainer">
      <form ref={form} onSubmit={handleSubmit}>
        <h2>Leave a review!</h2>
        <div className="email">
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={values.user_email}
            onChange={onChange}
            placeholder="miemail@gmail.com"
          />
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
          {errors.description && <p className="error">{errors.description}</p>}
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
        />

        <button type="submit">Send review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
