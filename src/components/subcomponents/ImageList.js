import React from 'react';
import Gallery from 'react-grid-gallery';
import { Jumbotron } from 'reactstrap';

const photos = [
    {
        src: "/ac_consulting/img/1.jpg",
        thumbnail: "/ac_consulting/img/1.jpg",
        caption: "Backyard BBQ",
      },
      {
        src: "/ac_consulting/img/2.jpg",
        caption: "Backyard BBQ 2",
        thumbnail: "/ac_consulting/img/2.jpg",
      },
      {
        src: "/ac_consulting/img/3.jpg",
        caption: "Bedroom",
        thumbnail: "/ac_consulting/img/3.jpg",
      },
      {
        src: "/ac_consulting/img/4.jpg",
        caption: "Bedroom 2",
        thumbnail: "/ac_consulting/img/4.jpg",
      },
      {
        src: "/ac_consulting/img/5.jpg",
        caption: "Bedroom 3",
        thumbnail: "/ac_consulting/img/5.jpg",
      },
      {
        src: "/ac_consulting/img/6.jpg",
        caption: "Bathroom",
        thumbnail: "/ac_consulting/img/6.jpg",
      },
      {
        src: "/ac_consulting/img/7.jpg",
        caption: "Bathroom 2",
        thumbnail: "/ac_consulting/img/7.jpg",
      },
      {
        src: "/ac_consulting/img/8.jpg",
        caption: "Bathroom 3",
        thumbnail: "/ac_consulting/img/8.jpg",
      },
      {
        src: "/ac_consulting/img/9.jpg",
        caption: "Backyard Tiki Bar",
        thumbnail: "/ac_consulting/img/9.jpg",
      },
      {
        src: "/ac_consulting/img/10.jpg",
        caption: "Jacuzzi ",
        thumbnail: "/ac_consulting/img/10.jpg",
      },
      {
        src: "/ac_consulting/img/11.jpg",
        caption: "Jacuzzi 2",
        thumbnail: "/ac_consulting/img/11.jpg",
      },
      {
        src: "/ac_consulting/img/12.jpg",
        caption: "Jacuzzi 3",
        thumbnail: "/ac_consulting/img/12.jpg",
      },
      {
        src: "/ac_consulting/img/13.jpg",
        caption: "Backyard Firepit",
        thumbnail: "/ac_consulting/img/13.jpg",
      },
      {
        src: "/ac_consulting/img/14.jpg",
        caption: "Evening",
        thumbnail: "/ac_consulting/img/14.jpg",
      },
      {
        src: "/ac_consulting/img/15.jpg",
        caption: "Deck Chairs",
        thumbnail: "/ac_consulting/img/15.jpg",
      },
      {
        src: "/ac_consulting/img/16.jpg",
        caption: "Lawn & Deck Chairs",
        thumbnail: "/ac_consulting/img/16.jpg",
      },
      {
        src: "/ac_consulting/img/17.jpg",
        caption: "Deck Chairs 2",
        thumbnail: "/ac_consulting/img/17.jpg",
      },
      {
        src: "/ac_consulting/img/18.jpg",
        caption: "Deck Chairs 3",
        thumbnail: "/ac_consulting/img/18.jpg",
      },
      {
        src: "/ac_consulting/img/19.jpg",
        caption: "Backyard Tiki Bar 2",
        thumbnail: "/ac_consulting/img/19.jpg",
      },
      {
        src: "/ac_consulting/img/20.jpg",
        caption: "Backyard Tiki Bar 3",
        thumbnail: "/ac_consulting/img/20.jpg",
      },
      {
        src: "/ac_consulting/img/21.jpg",
        caption: "Jacuzzi, Deck Chairs, & Floating Chair",
        thumbnail: "/ac_consulting/img/21.jpg",
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