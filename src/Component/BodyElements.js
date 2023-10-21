import React, { useContext, useEffect, useState } from 'react';
import { FlightData } from '../Context/DataCOntext';
import BodyItems from './BodyItems';

const BodyElements = () => {
    return (
        <div className='container'>
            <BodyItems></BodyItems>
        </div>
    );
};

export default BodyElements;