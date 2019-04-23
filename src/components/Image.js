import React from 'react';
import { string } from 'prop-types';

const Image = ({ image, children }) => (
    <div className = 'imageCont'>
        <img src = { image } alt = '' />
        { children }
    </div>
);

Image.propTypes = {
    image: string.isRequired
}

export default Image;