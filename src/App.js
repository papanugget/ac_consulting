import React from 'react';
import './css/style.css';
// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhoneAlt, faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, } from '@fortawesome/free-solid-svg-icons';
// components
import Header from './components/Header';
import Home from './components/Home';
import ServicesList from './components/ServicesList';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

library.add(fab, faEnvelope, faMapPin, faPhoneAlt,faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, );

const App = () => {
    return (
      <Router>
        <div>
            <Header />

            <Home />

            <div className="container-fluid" id="services">
              <ServicesList />
            </div>

            <div id="gallery">
              <ImageGallery />
            </div>

            <div className="container-fluid">
              <Contact />
            </div>

            <div className="container-fluid">
              <About />
            </div>

              <Footer />
          </div>
      </Router>
    );
}

export default App;