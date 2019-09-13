import React from 'react';

const ImageItem = (props) => {
    const photo = props.photo;
    const onImageSelect = props.onImageSelect;
    return(
        <img src={photo.photo} alt={photo.caption} key={photo.photo} onClick={onImageSelect}/>
    );
}

export default ImageItem;