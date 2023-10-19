import React from 'react';
import useMenu from '../Hooks/useMenu';

const BodyElements = () => {
    const [menu] = useMenu([]);
    // const flight_number = menu.filter(item => item.flight_number === "flight_number")
    console.log(menu)
    return (
        <div>
            {/* <h2>{flight_number }</h2>
             */}
            {
                menu.map(item =>
                    <>
                        <div className="d-flex ">
                            <div class="card">
                                <img className='' src={item.links.mission_patch} alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </div>
    );
};

export default BodyElements;