import React from 'react';
import { number, oneOfType, string } from 'prop-types';

const Area = ({ area = 'не указано' }) => (
    <p>Площадь: <strong>{ area }</strong></p>
);

Area.propTypes = {
    area: oneOfType([ string, number ])
}

export default Area;