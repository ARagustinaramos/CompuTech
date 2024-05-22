import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions/actions';

const ByBrand = () => {
  const dispatch = useDispatch();
  const handleBrandChange = (event) => {
    const brand = event.target.value;
    dispatch(setFilter({ BrandIdBrand: brand })); 
  };

  return (
    <div className="content-center">
      <form className="max-w-sm mx-auto content-center">
        <select
          id="brands"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 content-center"
          onChange={handleBrandChange}
        >
          <option defaultValue>Elige una marca</option>
          <option value="Razer">Razer</option>
          <option value="Corsair">Corsair</option>
          <option value="Logitech">Logitech</option>
          <option value="Samsung">Samsung</option>
        </select>
      </form>
    </div>
  );
};

export default ByBrand;
