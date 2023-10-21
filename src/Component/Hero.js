import React, { useContext } from "react";
import "../Styles/main.scss";
import PaginationComponent from "./PaginationComponent";
import FilterComponent from "./FilterComponent";
import SearchBox from "./SearchBox";
import SortingStatus from "./SortingStatus";
import SortingDate from "./SortingData";
import { FlightData } from "../Context/DataCOntext";

const Hero = () => {
    const { sortOptionStatus, setSortOptionStatus } = useContext(FlightData);
    return (
        <div className='container'>
            <div className='heading'>
                <h2>Spaceflight details</h2>
                <p className='secondery-heading'>
                    Find out the elaborate features of all the past big spaceflights.
                </p>
            </div>
            <header className=' d-block d-md-flex d-lg-flex justify-content-between align-items-center'>
                <div>
                    <SearchBox></SearchBox>
                </div>
                <div className='right-side-bar justify-content-end'>
                    <FilterComponent />
                    <div className='d-block d-md-flex d-lg-flex gap-3'>
                        <SortingDate />
                        <SortingStatus />
                    </div>
                </div>
            </header>
            <PaginationComponent></PaginationComponent>
            <section></section>
        </div>
    );
};

export default Hero;
