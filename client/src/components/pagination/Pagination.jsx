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
    <div className="flex items-center justify-center mt-4 space-x-4">
      <button 
        onClick={prev} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={currentPage <= 1}
      >
        Anterior
      </button>
      <div className="text-gray-700 dark:text-gray-300">{currentPage} / {totalPages}</div>
      <button 
        onClick={next} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={currentPage >= totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;