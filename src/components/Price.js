import React from 'react';
import { number } from 'prop-types';

const Price = ({ price }) => (
    <p>Цена: <strong>{ price }</strong></p>
);

Price.propTypes = {
    price: number.isRequired
}

export default Price;