import React, { useContext } from "react";
import { FlightData } from "../Context/DataCOntext";

const SortingDate = () => {
  const { sortOptionDate, setSortOptionDate } = useContext(FlightData);

  const handleSortChange = (event) => {
    setSortOptionDate(event.target.value);
  };

  return (
    <div className='input-group mb-3 filter-data'>
      <select
        className='form-select text-start'
        id='inputGroupSelect03'
        placeholder='By Launch Date'
        value={sortOptionDate}
        onChange={handleSortChange}
      >
        <option selected>By Launch Date</option>
        <option value='1'>Last Week</option>
        <option value='2'>Last Month</option>
        <option value='3'>Last Year</option>
      </select>
    </div>
  );
  
};

export default SortingDate;
