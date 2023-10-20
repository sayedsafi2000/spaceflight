import React, { useContext, useState } from 'react';
import { FlightData } from '../Context/DataCOntext';

const itemsPerPage = 9; // Number of items to display per page

const PaginationComponent = () => {
  const PaginationData = useContext(FlightData);
  const {menu} = PaginationData.
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = menu.slice(startIndex, endIndex);

  const totalPages = Math.ceil(menu.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display current page menu */}
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item.name}</li>
        )}
      </ul>

      {/* Pagination controls */}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
