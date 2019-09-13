import React from 'react';
import ImageList from './subcomponents/ImageList';

const ImageGallery = () => {
    return(
        <div className="img-container">
            <h2><span className="primary-text">Our</span> AirBnb</h2>
            <ImageList/>
        </div>
    );
}

export default ImageGallery;