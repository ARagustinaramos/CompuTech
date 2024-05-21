import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterType } from '../../redux/actions/actions';
import { getBrands } from '../../redux/actions/actions';
import  { useEffect, } from 'react';

const ByType = () => {
  const dispatch = useDispatch()
  const allBrands = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getBrands());
  }, []);
  
  const handlerBrands = (event) => {
    event.preventDefault();
    if (event.target.value !== 'tipos') {
      dispatch(filterType(event.target.value));
    }
  };
  
  
  return (
    <div>
      <label htmlFor="">Filtrar por tipo: </label>
      <select onChange={(event) => handlerBrands(event)}>
          <option value={'tipos'}>Tipos</option>
          <option value="all">todos</option>
          {allBrands?.map((e, index) => (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default ByType