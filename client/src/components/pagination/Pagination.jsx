import React from 'react';

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
    <div className="flowbite-pagination">
      <h4 onClick={prev} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>Anterior</h4>
      <div className="flowbite-pagination-current">{currentPage} / {totalPages}</div>
      <h4 onClick={next} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>Siguiente</h4>
    </div>
  );
};

export default Pagination;


