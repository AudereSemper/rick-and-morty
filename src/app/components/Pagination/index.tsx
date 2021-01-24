import React, { useState } from 'react';
import { PaginationContainer } from './styles';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage, setCurrentPage);
  return (
    <PaginationContainer>
      ciao
    </PaginationContainer>
  );
};

export default Pagination;
