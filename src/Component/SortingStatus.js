import React, { useContext } from "react";
import { FlightData } from "../Context/DataCOntext";

const SortingStatus = () => {
  const { sortOptionStatus, setSortOptionStatus } = useContext(FlightData);

  const handleSortChange = (event) => {
    setSortOptionStatus(event.target.value);
  };

  return (
    <div className='input-group mb-3 filter-data'>
      <select
        className='form-select text-start'
        id='inputGroupSelect03'
        aria-label='Example select with button addon'
        value={sortOptionStatus}
        onChange={handleSortChange}
      >
        <option >By Launch Status</option>
        <option value='1'>Success</option>
        <option value='2'>Failure</option>
      </select>
    </div>
  );
};

export default SortingStatus;
