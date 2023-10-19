import React from 'react';
import "../Styles/main.scss"
const Hero = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <h2>Spaceflight details</h2>
                <p className='secondery-heading'>Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <header className='d-md-flex d-block d-lg-flex justify-content-between justify-center'>
                <div class="input-group mb-3 d-flex align-items-center justify-content-center search-bar">
                    <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="bg-primary p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
                <div className='right-side-bar'>
                    <div className="radio d-flex justify-end gap-2 mb-4">
                        <input className='mr-2' type="checkbox" name="" id="" />
                        <span >Show only upcomming</span>
                    </div>
                    <div className='d-block d-lg-flex gap-3'>
                        <div class="input-group mb-3 filter-data">
                            <select class="form-select text-start " id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>By Launch Date</option>
                                <option value="1">Last Week</option>
                                <option value="2">Last Month</option>
                                <option value="3">Last Year</option>
                            </select>
                        </div>
                        <div class="input-group mb-3 filter-data">
                            <select class="form-select text-start " id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>By Launch Status</option>

                            </select>
                        </div>
                    </div>
                </div>
            </header>
            <section>

            </section>
        </div>
    );
};

export default Hero;