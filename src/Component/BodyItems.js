import React, { useContext } from 'react';
import { FlightData } from '../Context/DataCOntext';

const BodyItems = () => {
    const value = useContext(FlightData);
    console.log(value)
    const { loading } = value;
    console.log(loading)

    return (
        <div className='row'>
            {
                value.map(item =>
                    <>
                        <div class="col-md-6 col-lg-4">
                            <div className="card mb-4">
                                <img className='' src={item?.links.mission_patch} alt="..." />
                                <div class="card-body">
                                    <p>{item?.launch_date_local}</p>
                                    <h3>{item?.mission_name}</h3>
                                    <p class="card-text">{item?.rocket.rocket_name}</p>
                                    <p>{item?.launch_success}</p>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </div>
    );
};

export default BodyItems;