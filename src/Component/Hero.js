import React from 'react';
import "../Styles/main.scss"
import SearchBox from './SearchBox';
import SortingData from './SortingData';
import PaginationComponent from './PaginationComponent';
const Hero = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <h2>Spaceflight details</h2>
                <p className='secondery-heading'>Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <header className='d-md-flex d-block d-lg-flex justify-content-between justify-center'>
                <SearchBox></SearchBox>
                <div className='right-side-bar'>
                    <div className="radio d-flex justify-end gap-2 mb-4">
                        <input className='mr-2' type="checkbox" name="" id="" />
                        <span >Show only upcomming</span>
                    </div>
                    <div className='d-block d-lg-flex gap-3'>
                        <SortingData></SortingData>
                        <div class="input-group mb-3 filter-data">
                            <select class="form-select text-start " id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>By Launch Status</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
            <PaginationComponent></PaginationComponent>
            <section>

            </section>
        </div>
    );
};

export default Hero;