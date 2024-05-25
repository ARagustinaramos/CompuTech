import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

const Cards = ({ brandFilter, categoryFilter, nameFilter }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceOrder, setPriceOrder] = useState('asc'); // Estado para el orden de precio

  useEffect(() => {
    fetchProducts();
  }, [brandFilter, categoryFilter, nameFilter, priceOrder]); // Llama a fetchProducts cada vez que cambia algún filtro o el orden de precio

  const fetchProducts = async () => {
    try {
      let url = 'http://localhost:3001/products';
      const params = new URLSearchParams();
      if (brandFilter) params.append('brand', brandFilter);
      if (categoryFilter) params.append('category', categoryFilter);
      if (nameFilter) params.append('name', nameFilter);

      if (params.toString()) url += `?${params.toString()}`;

      const response = await fetch(url);
      let data = await response.json();

      // Ordenar los productos según el estado de ordenamiento de precios
      if (priceOrder === 'asc') {
        data = data.sort((a, b) => a.price - b.price);
      } else {
        data = data.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleOrderChange = (e) => {
    setPriceOrder(e.target.value);
  };

  return (
    <div>
      <div className="py-2">
        <label htmlFor="" className="text-slate-500">Ordenar por precio: </label>
        <select name='' onChange={handleOrderChange} className="border-hidden text-slate-500">
          <option value="asc" className="text-slate-500">Menor a Mayor</option>
          <option value="desc" className="text-slate-500">Mayor a Menor</option>
        </select>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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






