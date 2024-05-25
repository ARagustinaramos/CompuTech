import React, { useState, useEffect } from 'react';

const ByPrice = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState('asc');  // Estado para el orden

    useEffect(() => {
        fetchProducts();
    }, [order]);  // Llama a fetchProducts cada vez que cambia el orden

    const fetchProducts = () => {
        fetch(`http://localhost:3001/products?sortField=price&sortOrder=${order}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    };

    return (
        <div>
            <div className="py-2">
                <label htmlFor="" className="text-slate-500">Orden por precio: </label>
                <select name='' onChange={handleOrderChange} className="border-hidden text-slate-500">
                    <option value="asc" className="text-slate-500"> Menor a Mayor</option>
                    <option value="desc" className="text-slate-500"> Mayor a Menor</option>
                </select>
            </div>
            </div>
        
    );
};

export default ByPrice;

