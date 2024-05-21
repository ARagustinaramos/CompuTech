import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/PokémonLogo.svg"
import styles from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { getByName } from '../../redux/actions/actions'
import BySource from '../filters/BySource'
import ByType from '../filters/ByType'
import ByName from '../filters/ByName'
import ByAttack from '../filters/ByAttack'

const Navbar = () => {
  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState("");


  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getByName(searchString))
  }


  return (
    <div className={styles.navbar}>
      <form className={styles.navbar} onChange={handleChange}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}></SearchBar>

        <Link to="/create">
          <button type='submit'>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}>Crear</span>
          </button>

        </Link>
        <div>
          <BySource></BySource>
          <ByType></ByType>
          <ByName></ByName>
          <ByAttack></ByAttack>
        </div>

      </form>

    </div>

  )
}

export default Navbar