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

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 rounded-lg transition-colors ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center gap-2 p-4">
      <button 
        onClick={() => goToPage(1)} 
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage === 1 ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
        }`} 
        disabled={currentPage === 1}
      >
        Primera
      </button>
      <button 
        onClick={prev} 
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage <= 1 ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
        }`} 
        disabled={currentPage <= 1}
      >
        Anterior
      </button>
      <div className="flex gap-1">
        {renderPageNumbers()}
      </div>
      <button 
        onClick={next} 
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage >= totalPages ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
        }`} 
        disabled={currentPage >= totalPages}
      >
        Siguiente
      </button>
      <button 
        onClick={() => goToPage(totalPages)} 
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage === totalPages ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
        }`} 
        disabled={currentPage === totalPages}
      >
        Última
      </button>
    </div>
  );
};

export default Pagination;