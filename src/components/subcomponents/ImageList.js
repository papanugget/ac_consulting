import React from 'react';
import Gallery from 'react-grid-gallery';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
// import ReactBnbGallery from 'react-bnb-gallery';
// import ImageItem from './ImageItem';

const photos = [
    {
        src: "../../img/1.jpg",
        thumbnail: "../../img/1.jpg",
        caption: "",
      },
      {
        src: "../../img/2.jpg",
        caption: "",
        thumbnail: "../../img/2.jpg",
      },
      {
        src: "../../img/3.jpg",
        caption: "",
        thumbnail: "../../img/3.jpg",
      },
      {
        src: "../../img/4.jpg",
        caption: "",
        thumbnail: "../../img/4.jpg",
      },
      {
        src: "../../img/5.jpg",
        caption: "",
        thumbnail: "",
      },
      {
        src: "../../img/6.jpg",
        caption: "",
        thumbnail: "../../img/6.jpg",
      },
      {
        src: "../../img/7.jpg",
        caption: "",
        thumbnail: "../../img/7.jpg",
      },
      {
        src: "../../img/8.jpg",
        caption: "",
        thumbnail: "../../img/8.jpg",
      },
      {
        src: "../../img/9.jpg",
        caption: "",
        thumbnail: "../../img/9.jpg",
      },
      {
        src: "../../img/10.jpg",
        caption: "",
        thumbnail: "../../img/10.jpg",
      },
      {
        src: "../../img/11.jpg",
        caption: "",
        thumbnail: "../../img/11.jpg",
      },
      {
        src: "../../img/12.jpg",
        caption: "",
        thumbnail: "../../img/12.jpg",
      },
      {
        src: "../../img/13.jpg",
        caption: "",
        thumbnail: "../../img/13.jpg",
      },
      {
        src: "../../img/14.jpg",
        caption: "",
        thumbnail: "../../img/14.jpg",
      },
      {
        src: "../../img/15.jpg",
        caption: "",
        thumbnail: "../../img/15.jpg",
      },
      {
        src: "../../img/16.jpg",
        caption: "",
        thumbnail: "../../img/16.jpg",
      },
      {
        src: "../../img/17.jpg",
        caption: "",
        thumbnail: "../../img/17.jpg",
      },
      {
        src: "../../img/18.jpg",
        caption: "",
        thumbnail: "../../img/18.jpg",
      },
      {
        src: "../../img/19.jpg",
        caption: "",
        thumbnail: "../../img/19.jpg",
      },
      {
        src: "../../img/20.jpg",
        caption: "",
        thumbnail: "../../img/20.jpg",
      },
      {
        src: "../../img/21.jpg",
        caption: "",
        thumbnail: "../../img/21.jpg",
      },

];

const ImageList = () => {
  return(
    <div className="img-list">
      <Gallery
          images={photos}
          enableLightbox={true}
          enableImageSelection={false}
      />
  </div>

  );
}

export default ImageList;