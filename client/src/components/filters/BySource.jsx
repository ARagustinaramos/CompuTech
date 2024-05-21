import React from 'react'
import { useDispatch } from 'react-redux'
import { filterDbApi } from '../../redux/actions/actions';

const BySource = () => {

  const dispatch = useDispatch();
  
  const handleFilterApiDb = (event) => {
    dispatch(filterDbApi(event.target.value))
  }
  return (
    <div>
      <label htmlFor="">Filtrar por origen: </label>
      <select name='' onChange={handleFilterApiDb}>
        <option value="all">Todos</option>
        <option value="api">API</option>
        <option value="db">Base de Datos</option>
      </select>
    </div>
  )
}

export default BySource