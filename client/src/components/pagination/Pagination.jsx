import React from 'react'
import styles from './pagination.module.css'

const Pagination = ({ currentPage, setCurrentPage, nPages }) => {
  const next = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <h4 onClick={prev}>Anterior </h4>
      <div> {currentPage} / {nPages}</div>
      <h4 onClick={next} >Siguiente</h4>
    </div>
  )
}

export default Pagination