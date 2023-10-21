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
            <header className='d-md-flex d-block d-lg-flex justify-content-between justify-center'>
                <SearchBox></SearchBox>
                <div className='right-side-bar'>
                    <FilterComponent />
                    <div className='d-block d-lg-flex gap-3'>
                        <SortingDate></SortingDate>
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
