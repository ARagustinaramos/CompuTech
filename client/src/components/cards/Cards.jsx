import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

const Cards = ({ brandFilter, categoryFilter, nameFilter, nameOrder }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const allProducts = useSelector((state) => state.copyProducts);

  useEffect(() => {
    // Filtrar productos según los filtros aplicados
    let filtered = allProducts;

    if (brandFilter) {
      filtered = filtered.filter(product => product.brand === brandFilter);
    }
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    if (nameFilter) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    // Ordenar los productos según el filtro de orden por nombre
    if (nameOrder === 'a-z') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (nameOrder === 'z-a') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  }, [allProducts, brandFilter, categoryFilter, nameFilter, nameOrder]);

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







