import React from 'react';
import './css/style.css';
// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhoneAlt, faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, } from '@fortawesome/free-solid-svg-icons';
// components
import Header from './components/Header';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Services from './components/Services';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

library.add(fab, faEnvelope, faMapPin, faPhoneAlt,faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        <Header/>

        <div className="container-fluid" id="showcase-gallery">
          <Showcase />
        </div>

        <div className="container-fluid" id="features">
          <Features />
        </div>

        <div className="container-fluid" id="services">
          <Services />
        </div>

        <div id="gallery">
          <ImageGallery />
        </div>

        <div className="container-fluid">
          <Contact/>
        </div>

          <Footer/>
      </div>
    );
  }
}

export default App;