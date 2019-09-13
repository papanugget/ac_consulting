import React from 'react';
import Gallery from 'react-grid-gallery';

const photos = [
    {
        src: "./img/1.jpg",
        thumbnail: "./img/1.jpg",
        caption: "Backyard BBQ",
      },
      {
        src: "./img/2.jpg",
        caption: "Backyard BBQ 2",
        thumbnail: "./img/2.jpg",
      },
      {
        src: "./img/3.jpg",
        caption: "Bedroom",
        thumbnail: "./img/3.jpg",
      },
      {
        src: "./img/4.jpg",
        caption: "Bedroom 2",
        thumbnail: "./img/4.jpg",
      },
      {
        src: "./img/5.jpg",
        caption: "Bedroom 3",
        thumbnail: "./img/5.jpg",
      },
      {
        src: "./img/6.jpg",
        caption: "Bathroom",
        thumbnail: "./img/6.jpg",
      },
      {
        src: "./img/7.jpg",
        caption: "Bathroom 2",
        thumbnail: "./img/7.jpg",
      },
      {
        src: "./img/8.jpg",
        caption: "Bathroom 3",
        thumbnail: "./img/8.jpg",
      },
      {
        src: "./img/9.jpg",
        caption: "Backyard Tiki Bar",
        thumbnail: "./img/9.jpg",
      },
      {
        src: "./img/10.jpg",
        caption: "Jacuzzi ",
        thumbnail: "./img/10.jpg",
      },
      {
        src: "./img/11.jpg",
        caption: "Jacuzzi 2",
        thumbnail: "./img/11.jpg",
      },
      {
        src: "./img/12.jpg",
        caption: "Jacuzzi 3",
        thumbnail: "./img/12.jpg",
      },
      {
        src: "./img/13.jpg",
        caption: "Backyard Firepit",
        thumbnail: "./img/13.jpg",
      },
      {
        src: "./img/14.jpg",
        caption: "Evening",
        thumbnail: "./img/14.jpg",
      },
      {
        src: "./img/15.jpg",
        caption: "Deck Chairs",
        thumbnail: "./img/15.jpg",
      },
      {
        src: "./img/16.jpg",
        caption: "Lawn & Deck Chairs",
        thumbnail: "./img/16.jpg",
      },
      {
        src: "./img/17.jpg",
        caption: "Deck Chairs 2",
        thumbnail: "./img/17.jpg",
      },
      {
        src: "./img/18.jpg",
        caption: "Deck Chairs 3",
        thumbnail: "./img/18.jpg",
      },
      {
        src: "./img/19.jpg",
        caption: "Backyard Tiki Bar 2",
        thumbnail: "./img/19.jpg",
      },
      {
        src: "./img/20.jpg",
        caption: "Backyard Tiki Bar 3",
        thumbnail: "./img/20.jpg",
      },
      {
        src: "./img/21.jpg",
        caption: "Jacuzzi, Deck Chairs, & Floating Chair",
        thumbnail: "./img/21.jpg",
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