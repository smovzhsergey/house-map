import React from 'react';
import { number, oneOfType, string } from 'prop-types';

const Area = ({ area = 'не указано' }) => {

    const units = !area.length ? <span>м<sup>2</sup></span> : null;

    return <p>Площадь: <strong>{ area } { units }</strong></p>
};

Area.propTypes = {
    area: oneOfType([ string, number ])
}

export default Area;