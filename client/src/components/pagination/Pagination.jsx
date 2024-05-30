import React from "react";
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
    <div className="flex justify-center items-center gap-4 p-4">
      <button 
        onClick={prev} 
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage <= 1 ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
        }`} 
        disabled={currentPage <= 1}
      >
        Anterior
      </button>
      <div className="font-bold text-gray-700 dark:text-gray-300">
        {currentPage} / {totalPages}
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
    </div>
  );
};

export default Pagination;
