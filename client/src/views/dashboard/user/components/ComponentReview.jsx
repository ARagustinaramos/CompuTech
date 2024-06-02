import React, { useState } from 'react';
import Starts from '../components/Starts'

const ComponentReview = ({ isOpen, onClose, handleAddReview, id_Product, name, image}) => {
  const [reviewData, setReviewData] = useState({
    id_Product: id_Product,
    ranking: 0,
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddReview(reviewData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg ">
        <button onClick={onClose} className="float-right p-1 pb-3">X</button>
        <h1 className="pl-5 pt-5 text-xl font-bold text-gray-900 truncate dark:text-white">Agrega tu opinión sobre: </h1>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={image}className="m-3 w-14 h-14 rounded-full" alt={name}/>
            <h2 className="text-xl font-semibold text-gray-900 truncate dark:text-white">{name}</h2>

        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='text'>Ranking:</label>
            <Starts name="ranking" value={reviewData.ranking}
              onChange={handleChange}
              min="1"
              max="5"
              required />
          </div>
            <label>Comentario:</label>
          <div>
            <textarea
              name="comment"
              value={reviewData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComponentReview;
