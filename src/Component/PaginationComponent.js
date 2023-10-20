import React, { useContext, useState } from 'react';
import { FlightData } from '../Context/DataCOntext';

const itemsPerPage = 9; // Number of items to display per page

const PaginationComponent = () => {
  const PaginationData = useContext(FlightData);
  const { menu } = PaginationData;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = menu.slice(startIndex, endIndex);

  const totalPages = Math.ceil(menu.length / itemsPerPage);
  console.log(currentData)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display current page menu */}
      <div className='row'>
        {
          currentData.map(item =>
            <div class="col-md-6 col-lg-4">
              <div className="card mb-4 pt-4">
                <img className='' src={item?.links.mission_patch} alt="..." />
                <div class="card-body">
                  <p>{item?.launch_date_local}</p>
                  <h3>{item?.mission_name}</h3>
                  <p class="card-text">{item?.rocket.rocket_name}</p>
                  <p>{item?.launch_success}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>

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
          disabled={currentPage === totalPages}> Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
