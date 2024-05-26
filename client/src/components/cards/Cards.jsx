import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import API_URL from "../../config";

const Cards = ({ brandFilter, categoryFilter, nameFilter, nameOrder, priceOrder, currentPage, setCurrentPage }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const allProducts = useSelector((state) => state.copyProducts);
  const dataQt = 12; // Número de productos por página

  useEffect(() => {
    
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

    if (nameOrder === 'a-z') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (nameOrder === 'z-a') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Ordenar los productos según el filtro de orden por precio
    if (priceOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [allProducts, brandFilter, categoryFilter, nameFilter, nameOrder, priceOrder]);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / dataQt);

  // Filtrar los productos a mostrar en la página actual
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