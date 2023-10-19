import React, { useState } from 'react';
import { createContext } from "react";
import useMenu from '../Hooks/useMenu';

export const FlightData = createContext();
const DataCOntext = ({ children }) => {
    const [menu,loading] = useMenu({});
    const [searchValue, setSearchValue] = useState("");
    const contextValue = {
        menu, searchValue, setSearchValue,loading
    }
    return (
        <FlightData.Provider value={contextValue}>
            {children}
        </FlightData.Provider>
    );
};

export default DataCOntext;