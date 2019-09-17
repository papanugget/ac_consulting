import React from 'react';
import './css/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhoneAlt, faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ServicesList from './components/ServicesList';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import About from './components/About';



library.add(fab, faEnvelope, faMapPin, faPhoneAlt,faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, );

const App = () => {
    return (
        <div>
            <Router>
            <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/services" component={ServicesList} />
                    <Route path="/gallery" component={ImageGallery} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route component={Home}/>
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}

export default App;