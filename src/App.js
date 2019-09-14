import React from 'react';
import './css/style.css';
// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhoneAlt, faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, } from '@fortawesome/free-solid-svg-icons';
// components
import Header from './components/Header';
import Footer from './components/Footer';

library.add(fab, faEnvelope, faMapPin, faPhoneAlt,faMagic, faChartLine, faUserFriends, faClipboardList, faFileInvoiceDollar, faCircle, );

const App = () => {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default App;