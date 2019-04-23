import React from 'react';
import { number } from 'prop-types';

const Price = ({ price }) =>
    <p><strong>$ { price.toLocaleString() }</strong></p>;


Price.propTypes = {
    price: number.isRequired
}

export default Price;