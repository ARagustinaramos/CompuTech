import React from 'react';

const ByPrice = ({ setPriceOrder, resetNameOrder }) => {
  const handleOrderChange = (e) => {
    setPriceOrder(e.target.value);
    resetNameOrder(); // Resetear el orden alfabético
  };

  return (
    <div className="py-2">
      <label htmlFor="" className="text-slate-500 dark:text-gray-400">Orden por precio: </label>
      <select name='' onChange={handleOrderChange} value="" className="border-hidden text-slate-500 dark:text-gray-400 bg-white dark:bg-gray-800">
        <option value="" className="text-slate-500 dark:text-gray-400">Seleccionar</option> {/* Placeholder */}
        <option value="asc" className="text-slate-500 dark:text-gray-400">Menor a Mayor</option>
        <option value="desc" className="text-slate-500 dark:text-gray-400">Mayor a Menor</option>
      </select>
    </div>
  );
};

export default ByPrice;