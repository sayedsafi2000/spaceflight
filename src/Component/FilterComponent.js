import React, { useContext } from "react";
import { FlightData } from "../Context/DataCOntext";

const FilterComponent = () => {
  const { showOnlyUpcoming, setShowOnlyUpcoming } = useContext(FlightData);

  const handleCheckboxChange = () => {
    setShowOnlyUpcoming(!showOnlyUpcoming);
  };

  return (
    <div className='radio d-flex justify-end gap-2 mb-2'>
      <input
        type='checkbox'
        checked={showOnlyUpcoming}
        onChange={handleCheckboxChange}
      />
      <span>Show only upcoming</span>
    </div>
  );
};

export default FilterComponent;
