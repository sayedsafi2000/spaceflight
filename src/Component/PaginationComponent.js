import React, { useContext, useState } from "react";
import { FlightData } from "../Context/DataCOntext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "../Styles/main.scss";
const itemsPerPage = 9; // Number of items to display per page

const PaginationComponent = () => {
  const PaginationData = useContext(FlightData);
  const { filteredData, sortOptionStatus } = PaginationData;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  console.log(sortOptionStatus)

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
                  <p>Launch Date:
                    <span className="date">
                      {new Date(item?.launch_date_utc).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </p>
                  <h3>{item?.mission_name}</h3>
                  <p class='card-text'>{item?.rocket.rocket_name}</p>
                  <div>
                    <p>Launch Status:</p>
                    {
                      item?.launch_success === true ? <small className="bg-success px-2 py-1 rounded-1 text-white fw-bold">Success</small> : <small className="bg-danger px-2 py-1 rounded-1 text-white fw-bold">Failed</small>
                    }
                  </div>
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
