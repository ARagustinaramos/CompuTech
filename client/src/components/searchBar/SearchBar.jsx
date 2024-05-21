import React from 'react'
import styles from './searchBar.module.css'
const SearchBar = ({ handleSubmit, handleChange, SearchString }) => {
  return (
    <div className={styles.container}>


      <input className={styles.input} name="text" placeholder="Buscar..." type="search" onChange={handleChange} value={SearchString} />
      <button type='submit' onClick={handleSubmit}>
          <span className={styles.circle1}></span>
          <span className={styles.circle1}></span>
          <span className={styles.circle1}></span>
          <span className={styles.circle1}></span>
          <span className={styles.circle1}></span>
          <span className={styles.circle1}>Buscar</span>
        </button>
      
      {/* 
      <button type='submit' onClick={handleSubmit}>Buscar</button>
      <input type="search" placeholder="Buscar Pokémon" onChange={handleChange} value={SearchString} />
      */}
    </div>
  )
}

export default SearchBar