import React from 'react'
import { useDispatch } from 'react-redux'
import { orderName } from '../../redux/actions/actions';
const ByName = () => {
  const dispatch = useDispatch();
  
  const handleOrderByName = (event) => {
    dispatch(orderName(event.target.value))
  }
  return (
    <div>
      <label htmlFor="">Orden alfabético: </label>
      <select name='' onChange={handleOrderByName}>
        <option value="a-z"> A-Z</option>
        <option value="z-a"> Z-A</option>
      </select>
    </div>
  )
}

export default ByName