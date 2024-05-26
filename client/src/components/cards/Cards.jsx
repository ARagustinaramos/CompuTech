import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

const Cards = ({ brandFilter, categoryFilter, nameFilter, currentPage, dataQt }) => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3001/products';
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

  // Logic to calculate which products to display based on currentPage and dataQt
  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const productsToDisplay = filteredProducts.slice(indexInicial, indexFinal);

  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <Card 
              key={product.id_Product} 
              id_Product={product.id_Product} 
              name={product.name} 
              image={product.image} 
              price={product.price} 
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