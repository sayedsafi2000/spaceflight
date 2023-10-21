import React, { useState } from "react";
import { createContext } from "react";
import useMenu from "../Hooks/useMenu";

export const FlightData = createContext();
const DataCOntext = ({ children }) => {
  const [menu, loading] = useMenu({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOptionDate, setSortOptionDate] = useState(null);
  const [sortOptionStatus, setSortOptionStatus] = useState(null);
  const [showOnlyUpcoming, setShowOnlyUpcoming] = useState(false);

  const filteredData = menu
    .filter((item) =>
      item.mission_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => {
      if (showOnlyUpcoming) {
        return item.upcoming === true;
      }
      return true;
    })
    .sort((a, b) => {
      const sortOption = sortOptionDate;

      if (sortOption === "1") {
        const lastWeekUnix = Date.now() / 1000 - 604800;
        return (
          a.launch_date_unix -
          lastWeekUnix -
          (b.launch_date_unix - lastWeekUnix)
        );
      } else if (sortOption === "2") {
        const lastMonthUnix = Date.now() / 1000 - 2592000;
        return (
          a.launch_date_unix -
          lastMonthUnix -
          (b.launch_date_unix - lastMonthUnix)
        );
      } else if (sortOption === "3") {
        const lastYearUnix = Date.now() / 1000 - 31536000;
        return (
          a.launch_date_unix -
          lastYearUnix -
          (b.launch_date_unix - lastYearUnix)
        );
      }
      return 0;
    })
    .sort((a, b) => {
      const sortOption = sortOptionStatus;

      if (sortOption === "1") {
        return a.launch_success === b.launch_success
          ? 0
          : a.launch_success
          ? -1
          : 1;
      } else if (sortOption === "2") {
        return a.launch_success === b.launch_success
          ? 0
          : a.launch_success
          ? 1
          : -1;
      }
      return 0;
    });

  console.log(sortOptionDate);

  const contextValue = {
    filteredData,
    menu,
    searchQuery,
    setSearchQuery,
    setSortOptionDate,
    sortOptionStatus,
    setSortOptionStatus,
    setShowOnlyUpcoming,
    sortOptionDate,
    showOnlyUpcoming,
    loading,
  };

  return (
    <FlightData.Provider value={contextValue}>{children}</FlightData.Provider>
  );
};

export default DataCOntext;
