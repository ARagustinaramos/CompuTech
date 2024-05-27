import React from 'react';

const ByName = ({ setNameOrder, resetPriceOrder }) => {
  const handleOrderByName = (event) => {
    setNameOrder(event.target.value);
    resetPriceOrder(); // Resetear el orden de precio
  };

  return (
    <div className="py-2">
      <label htmlFor="" className="text-slate-500 dark:text-gray-400">Orden alfabético: </label>
      <select name='' onChange={handleOrderByName} value="" className="border-hidden text-slate-500 dark:text-gray-400 bg-white dark:bg-gray-800">
        <option value="" className="text-slate-500 dark:text-gray-400">Seleccionar</option> {/* Placeholder */}
        <option value="a-z" className="text-slate-500 dark:text-gray-400">A-Z</option>
        <option value="z-a" className="text-slate-500 dark:text-gray-400">Z-A</option>
      </select>
    </div>
  );
};

export default ByName;