import React from 'react';
import ImageList from './subcomponents/ImageList';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null
        }
    }
    onImageSelect = (image) => {
        this.setState({selectedImage: image.target.attributes.src.value});
    }
    render() {
        return (
            <ImageList />
        );
    }
}

export default ImageGallery;