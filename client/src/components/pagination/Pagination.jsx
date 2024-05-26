import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <h4 onClick={prev} style={{ cursor: currentPage > 1 ? 'pointer' : 'default' }}>
        Anterior
      </h4>
      <div>{currentPage} / {totalPages}</div>
      <h4 onClick={next} style={{ cursor: currentPage < totalPages ? 'pointer' : 'default' }}>
        Siguiente
      </h4>
    </div>
  );
};

export default Pagination;


