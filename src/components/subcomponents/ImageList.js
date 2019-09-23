import React from 'react';
import Gallery from 'react-grid-gallery';
import { Jumbotron } from 'reactstrap';

const photos = [
      {
        src: "./img/32.jpg",
        caption: "",
        thumbnail: "./img/32th.jpg",
      },
      {
        src: "./img/33.jpg",
        caption: "Anniversary Surprise",
        thumbnail: "./img/33th.jpg",
      },
      {
        src: "./img/34.jpg",
        caption: "",
        thumbnail: "./img/34th.jpg",
      },
      {
        src: "./img/35.jpg",
        caption: "Birthday Surprise",
        thumbnail: "./img/35th.jpg",
      },
      {
        src: "./img/36.jpg",
        caption: "Birthday Surprise 2",
        thumbnail: "./img/36th.jpg",
      },
      {
        src: "./img/1.jpg",
        thumbnail: "./img/1th.jpg",
        caption: "Backyard BBQ",
      },
      {
        src: "./img/2.jpg",
        caption: "Backyard BBQ 2",
        thumbnail: "./img/2th.jpg",
      },
      {
        src: "./img/3.jpg",
        caption: "Bedroom",
        thumbnail: "./img/3th.jpg",
      },
      {
        src: "./img/4.jpg",
        caption: "Bedroom 2",
        thumbnail: "./img/4th.jpg",
      },
      {
        src: "./img/5.jpg",
        caption: "Bedroom 3",
        thumbnail: "./img/5th.jpg",
      },
      {
        src: "./img/6.jpg",
        caption: "Bathroom",
        thumbnail: "./img/6th.jpg",
      },
      {
        src: "./img/7.jpg",
        caption: "Bathroom 2",
        thumbnail: "./img/7th.jpg",
      },
      {
        src: "./img/8.jpg",
        caption: "Bathroom 3",
        thumbnail: "./img/8th.jpg",
      },
      {
        src: "./img/9.jpg",
        caption: "Backyard Tiki Bar",
        thumbnail: "./img/9th.jpg",
      },
      {
        src: "./img/10.jpg",
        caption: "Jacuzzi ",
        thumbnail: "./img/10th.jpg",
      },
      {
        src: "./img/11.jpg",
        caption: "Jacuzzi 2",
        thumbnail: "./img/11th.jpg",
      },
      {
        src: "./img/12.jpg",
        caption: "Jacuzzi 3",
        thumbnail: "./img/12th.jpg",
      },
      {
        src: "./img/13.jpg",
        caption: "Backyard Firepit",
        thumbnail: "./img/13th.jpg",
      },
      {
        src: "./img/14.jpg",
        caption: "Evening",
        thumbnail: "./img/14th.jpg",
      },
      {
        src: "./img/15.jpg",
        caption: "Deck Chairs",
        thumbnail: "./img/15th.jpg",
      },
      {
        src: "./img/16.jpg",
        caption: "Lawn & Deck Chairs",
        thumbnail: "./img/16th.jpg",
      },
      {
        src: "./img/17.jpg",
        caption: "Deck Chairs 2",
        thumbnail: "./img/17th.jpg",
      },
      {
        src: "./img/18.jpg",
        caption: "Deck Chairs 3",
        thumbnail: "./img/18th.jpg",
      },
      {
        src: "./img/19.jpg",
        caption: "Backyard Tiki Bar 2",
        thumbnail: "./img/19th.jpg",
      },
      {
        src: "./img/20.jpg",
        caption: "Backyard Tiki Bar 3",
        thumbnail: "./img/20th.jpg",
      },
      {
        src: "./img/21.jpg",
        caption: "Jacuzzi, Deck Chairs, & Floating Chair",
        thumbnail: "./img/21th.jpg",
      },
      {
        src: "./img/22.jpg",
        caption: "",
        thumbnail: "./img/22th.jpg",
      },
      {
        src: "./img/23.jpg",
        caption: "",
        thumbnail: "./img/23th.jpg",
      },
      {
        src: "./img/24.jpg",
        caption: "",
        thumbnail: "./img/24th.jpg",
      },
      {
        src: "./img/25.jpg",
        caption: "",
        thumbnail: "./img/25th.jpg",
      },
      {
        src: "./img/26.jpg",
        caption: "",
        thumbnail: "./img/26th.jpg",
      },
      {
        src: "./img/27.jpg",
        caption: "",
        thumbnail: "./img/27th.jpg",
      },
      {
        src: "./img/28.jpg",
        caption: "",
        thumbnail: "./img/28th.jpg",
      },
      {
        src: "./img/29.jpg",
        caption: "",
        thumbnail: "./img/29th.jpg",
      },
      {
        src: "./img/30.jpg",
        caption: "",
        thumbnail: "./img/30th.jpg",
      },
      {
        src: "./img/31.jpg",
        caption: "",
        thumbnail: "./img/31th.jpg",
      },
];

const ImageList = () => {
  return(
    <div>
      <div className="img-list">
        <Gallery
            images={photos}
            enableLightbox={true}
            enableImageSelection={false}
        />
      </div>
      <br/>
      <div className="container-fluid">
        <Jumbotron>
          <h1>Come Stay At A Beautiful Villa In The Rockaways</h1>
          <p className="lead">Brand new 1 bedroom villa, sleeps upto 6 guests, 10 mins from JFK airport via A train, 5mins walk to the beach.</p>
          <hr className="my-2" />
          <p>My villa is brand spanking NEW, clean, bright, and airy. Everything in the villa is new from the bed to the cutlery. The sofa bed has a memory foam mattress in it and the queen size bed in the bedroom is a pillow top. Please come and see for yourself and I guarantee that you will be very, very pleased with everything in the villa.
          I provide fresh bagels and there is a coffee machine in the kitchen.
          Complimentary bottles of wine (red & white), beers, water, and childrens drinks.
          Organic homemade meals cooked for an extra fee upon request.</p>
          <p className="lead">
            <a href="https://www.airbnb.com/rooms/27373231?source_impression_id=p3_1568470454_FJz03r0O%2BM6iHpbw" target="_blank" rel="noopener noreferrer"className="btn btn-info">Learn More</a>
          </p>
        </Jumbotron>
      </div>
    </div>


  );
}

export default ImageList;