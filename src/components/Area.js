import React from 'react';
import { number, oneOfType, string } from 'prop-types';

const Area = ({ area = 'не указано' }) => 
    <p>Площадь: <strong>{ area } м<sup>2</sup></strong></p>;

Area.propTypes = {
    area: oneOfType([ string, number ])
}

export default Area;