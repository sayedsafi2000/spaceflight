import React, { useContext } from "react";
import { FlightData } from "../Context/DataCOntext";

const SearchBox = () => {
  const { searchQuery, setSearchQuery } = useContext(FlightData);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='input-group mb-3 d-flex align-items-center justify-content-center search-bar'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className='bg-primary p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-search text-white'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
