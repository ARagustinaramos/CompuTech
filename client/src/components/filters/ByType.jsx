import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterType } from '../../redux/actions/actions';
import { getTypes } from '../../redux/actions/actions';
import  { useEffect, } from 'react';

const ByType = () => {
  const dispatch = useDispatch()
  const allTypes = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  
  const handlerTypes = (event) => {
    event.preventDefault();
    if (event.target.value !== 'tipos') {
      dispatch(filterType(event.target.value));
    }
  };
  
  
  return (
    <div>
      <label htmlFor="">Filtrar por tipo: </label>
      <select onChange={(event) => handlerTypes(event)}>
          <option value={'tipos'}>Tipos</option>
          <option value="all">todos</option>
          {allTypes?.map((e, index) => (
            <option key={index} value={e.nombre}>
              {e.nombre}
            </option>
          ))}
        </select>
    </div>
  )
}

export default ByType