import React from 'react';

const ByPrice = ({ setPriceOrder }) => {
    const handleOrderChange = (e) => {
        setPriceOrder(e.target.value);
    };

    return (
        <div className="py-2">
            <label htmlFor="" className="text-slate-500 dark:text-gray-400">Orden por precio: </label>
            <select name='' onChange={handleOrderChange} className="border-hidden text-slate-500 dark:text-gray-400 bg-white dark:bg-gray-800">
                <option value="asc" className="text-slate-500 dark:text-gray-400"> Menor a Mayor</option>
                <option value="desc" className="text-slate-500 dark:text-gray-400"> Mayor a Menor</option>
            </select>
        </div>
    );
};

export default ByPrice;