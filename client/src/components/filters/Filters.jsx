import "./filters.styles.css";
//ACTIONS
import {getAllBrands, filterByBrand, filterByCategory, orderProductS } from "../../redux/actions";

//REACT REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.allBrands)

  const handleChangeBrand = (e) => {
    dispatch(filterByBrand(e.target.value))
  }

  const handleChangeCategory = (e) => {
    dispatch(filterByCategory(e.target.value))
  }
  const handleChangeRating = (e) => {
    dispatch(orderProductS(e.target.value))
  }

  const handleChangeAlpha = (e) => {
    dispatch(orderProductS(e.target.value))
  }

  useEffect(() => {
    dispatch(getAllBrands())
  },[dispatch])

    return (
      <div>
        <label className="labels">Géneros: </label>
        <select name='filterBrand' defaultValue='defect' id='filterBrand' onChange={handleChangeBrand}>
          <option value='defect'>Todos</option>
          {allBrands.map((brand) => {
            return <option key={brand.id} value={brand.name}>{brand.name}</option>
          })}
        </select>        
        <label className="labels">Fuente: </label>
        <select name='filterCategory' defaultValue='defect' id='filterCategory' onChange={handleChangeCategory}>
          <option value='defect'>Todos</option>
          <option value='bdd'>BDD</option>
          <option value='api'>API</option>
        </select>
        <label className="labels" >Rating: </label>
        <select name='filterRating' defaultValue='defect' id='filterRating' onChange={handleChangeRating}>
          <option value='higherRat'>higherRat</option>
          <option value='lowerRat'>lowerRat</option>
        </select>
        <label className="labels">Orden alfabético: </label>
        <select name='filterAlpha' defaultValue='defect' id='filterAlpha' onChange={handleChangeAlpha}>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </div>
    )
    };
  
  export default Filters;