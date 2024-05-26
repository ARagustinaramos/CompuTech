import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import Pagination from '../pagination/Pagination'; 

const Cards = ({ brandFilter, categoryFilter, nameFilter, nameOrder, priceOrder, currentPage, setCurrentPage }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dataQt = 12; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://computechback.onrender.com/products';
        const params = new URLSearchParams();
  
        if (brandFilter) params.append('brand', brandFilter);
        if (categoryFilter) params.append('category', categoryFilter);
        if (nameFilter) params.append('name', nameFilter);
  
        if (params.toString()) url += `?${params.toString()}`;
  
        const response = await fetch(url);
        let data = await response.json();
  
        let sortedData = [...data]; 
  
        if (nameOrder === 'a-z') {
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (nameOrder === 'z-a') {
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (priceOrder === 'asc') {
          sortedData.sort((a, b) => a.price - b.price);
        } else if (priceOrder === 'desc') {
          sortedData.sort((a, b) => b.price - a.price);
        }
  
      
        setFilteredProducts(sortedData);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchProducts();
  }, [brandFilter, categoryFilter, nameFilter, nameOrder, priceOrder]);
  

  const totalPages = Math.ceil(filteredProducts.length / dataQt);
  const indexFinal = currentPage * dataQt;
  const indexInicial = indexFinal - dataQt;
  const productsToDisplay = filteredProducts.slice(indexInicial, indexFinal);

  return (
    <div>
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
    </div>
  );
};

export default Cards;

