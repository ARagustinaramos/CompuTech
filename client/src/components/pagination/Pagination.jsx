import React from 'react';
import { Pagination as FlowbitePagination } from 'flowbite-react';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <FlowbitePagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => {
        onPageChange(page);
      }}
      showIcons
      previousLabel="Anterior"
      nextLabel="Siguiente"
    />
  );
};

export default CustomPagination;