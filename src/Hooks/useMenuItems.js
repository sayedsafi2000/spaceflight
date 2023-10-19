import React, { useContext } from 'react';
import { FlightData } from '../Context/DataCOntext';

const useMenuItems = () => {
    const menuItem = useContext(FlightData);

    return (
        <div>
            {
                menuItem.map(item => <>
                    <div class="card">
                        <img className='' src={item.links.mission_patch} alt="..." />
                        <div class="card-body">
                            <p>{item.launch_date_local}</p>
                            <h3>{item.mission_name}</h3>
                            <p class="card-text">{item.rocket.rocket_name}</p>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default useMenuItems;