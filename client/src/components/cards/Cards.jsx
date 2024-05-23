import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/actions';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';


const Cards = ({ brandFilter, nameFilter = '' }) => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3001/products';
        if (brandFilter) {
          url += `?brand=${brandFilter}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (brandFilter) {
      fetchProducts();
    } else {
      dispatch(getProducts());
    }
  }, [brandFilter, dispatch]);

  const allProducts = useSelector((state) => state.copyProducts);

  const productsToDisplay = (brandFilter ? filteredProducts : allProducts).filter((product) =>
    product.name?.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product, index) => (
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
