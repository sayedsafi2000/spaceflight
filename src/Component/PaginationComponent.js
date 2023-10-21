import React, { useContext, useState } from "react";
import { FlightData } from "../Context/DataCOntext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "../Styles/main.scss";
const itemsPerPage = 9; // Number of items to display per page

const PaginationComponent = () => {
  const PaginationData = useContext(FlightData);
  const { menu, filteredData } = PaginationData;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(totalPages, "Total Pages");

  return (
    <div>
      {/* Display current page menu */}
      <div className='row'>
        {currentData.length !== 0 ? (
          currentData.map((item) => (
            <div class='col-md-6 col-lg-4'>
              <div className='card mb-4 pt-4'>
                <img className='' src={item?.links.mission_patch} alt='...' />
                <div class='card-body'>
                  <p>{item?.launch_date_local}</p>
                  <h3>{item?.mission_name}</h3>
                  <p class='card-text'>{item?.rocket.rocket_name}</p>
                  <p>{item?.launch_success}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div class='col-md-12'>
            <div className='card my-4'>
              <div class='card-body'>
                <p class='card-text'>No Records Found</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className='pagination_buttons'>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <HiChevronLeft></HiChevronLeft>
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(1)}
          >
            {" "}
            1
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(2)}
          >
            {" "}
            2
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(3)}
          >
            {" "}
            3
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(4)}
          >
            {" "}
            4
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(5)}
          >
            {" "}
            5
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(6)}
          >
            {" "}
            6
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(currentPage)}
          >
            {" "}
            ...
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(13)}
          >
            {" "}
            13
          </button>

          <button
            className='btn btn-outline-primary'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {" "}
            <HiChevronRight></HiChevronRight>
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;
