import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actions';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import styles from './cards.module.css';

const Cards = ({ nData }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(getProducts());
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {nData.length > 0 ? (
          nData.map((product, index) => (
            <Card {...product} key={index} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Cards;