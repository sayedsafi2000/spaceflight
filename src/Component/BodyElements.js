import React, { useContext, useEffect, useState } from 'react';
import { FlightData } from '../Context/DataCOntext';
import BodyItems from './BodyItems';

const BodyElements = () => {
    // const value = useContext(FlightData);
    // const [rocketData,setRocketData] = useState("");
    // useEffect(()=>{
    //     setRocketData(value)
    // },[value])
    // console.log(value)
    return (
        <div className='container'>
            <BodyItems></BodyItems>
        </div>
    );
};

export default BodyElements;