import React from 'react';

const SortingData = () => {
    return (
        <div class="input-group mb-3 filter-data">
            <select class="form-select text-start " id="inputGroupSelect03" aria-label="Example select with button addon">
                <option selected>By Launch Date</option>
                <option value="1">Last Week</option>
                <option value="2">Last Month</option>
                <option value="3">Last Year</option>
            </select>
        </div>
    );
};

export default SortingData;