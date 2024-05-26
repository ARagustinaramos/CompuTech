import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/actions';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import API_URL from "../../config";

const Cards = ({ brandFilter, categoryFilter, nameFilter }) => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${API_URL}/products`;
        const params = new URLSearchParams();
        if (brandFilter) params.append('brand', brandFilter);
        if (categoryFilter) params.append('category', categoryFilter);
        if (nameFilter) params.append('name', nameFilter);

        if (params.toString()) url += `?${params.toString()}`;

        const response = await fetch(url);
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, [brandFilter, categoryFilter, nameFilter]);

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : [];

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <Card 
              key={product.id_Product} 
              id_Product={product.id_Product} 
              name={product.name} 
              image={product.image} 
              price={product.price} 
              brand={product.BrandIdBrand}  
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Cards;




