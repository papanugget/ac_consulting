import React from 'react';
import ImageItem from './ImageItem';

const photos = [
    {
        photo: "../../img/1.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      }, {
        photo: "../../img/2.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      }, {
        photo: "../../img/3.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/5.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/7.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/8.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/9.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/11.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/13.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/14.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/15.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/16.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/17.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/18.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/19.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },
      {
        photo: "../../img/21.jpg",
        caption: "",
        subcaption: "",
        thumbnail: "",
      },

];

const ImageList = () => {
    const imgList = photos.map(photo => {
        return <ImageItem photo={photo}/>
    });
    const opacity = 0.6;
    const currentImg = document.querySelector('#current-img');

    return (
      <React.Fragment>
        <h2><span className="primary-text">Our</span> AirBnb</h2>
          <div className="img-container">
              <div className="main-img">
                  <img src={photos[0].photo} id="current-img" alt="" key="" style={{opacity}}/>
              </div>
              <div className="img-list">
                  {imgList}
              </div>
          </div>
        </React.Fragment>
    );
}
    // have a grid / flex container to show image list
    // map through photos array
    // use template literals to create photo elements

export default ImageList;