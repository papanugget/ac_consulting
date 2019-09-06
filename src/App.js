import React from 'react';
import './css/style.css';
// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Footer from './components/Footer';
library.add(fab, faEnvelope, faMapPin, faPhoneAlt);
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
        <div className="container-fluid">
          <Features />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;