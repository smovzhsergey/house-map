import React from 'react';
import { string } from 'prop-types';

const Address = ({ address }) => (
    <p className = 'address'><i>{ address }</i></p>
);

Address.propTypes = {
    address: string.isRequired
}

export default Address;