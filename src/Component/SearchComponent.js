import React, { useContext, useState } from 'react';
import { FlightData } from '../Context/DataCOntext';

const SearchComponent = () => {
    const PaginationData = useContext(FlightData);
    const { menu } = PaginationData;
    const [searchQuery, setSearchQuery] = useState(menu);
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState(menu);
    console.log(filteredData)

    // Handle changes in the search input
    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filteredResults = data.filter((item) =>
            item.rocket.rocket_name.toLowerCase().includes(query)
        );
        setFilteredData(filteredResults);
    };
    return (
        <div class="input-group mb-3 d-flex align-items-center justify-content-center search-bar">
            <input
                class="form-control"
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch} className="bg-primary p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
            <div>
                <ul>
                    {
                        filteredData.map(item => <>
                            <li>{item.rocket.rocket_name}</li></>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default SearchComponent;