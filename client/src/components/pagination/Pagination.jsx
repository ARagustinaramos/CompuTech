import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.pagination}>
      <h4 onClick={prev}>Anterior</h4>
      <div>{currentPage} / {totalPages}</div>
      <h4 onClick={next}>Siguiente</h4>
    </div>
  );
};

export default Pagination;


