import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="footer" id="main-footer">
            <div className="container-fluid">
                <div className="row text-center"  id="company">
                    <div className="col-md">
                    < FontAwesomeIcon icon="envelope"/>  <a href="mailto:antoinecole@gmail.com">antoinecole@gmail.com</a>
                    </div>
                    <div className="col-md">
                    < FontAwesomeIcon icon="phone-alt"/>  <a href="tel:19172950587">917-295-0587</a>
                    </div>
                    <div className="col-md">
                    < FontAwesomeIcon icon="map-pin"/>  <a href="https://goo.gl/maps/dLyfu9qHsL4CDBZh8" target="_blank" rel="noopener noreferrer">Far Rockaway, New York</a>
                    </div>
                </div>
                <div className="row">
                    <hr/>
                </div>
                <div className="row">
                <div className="col-lg">
                    <h5 className="text-uppercase">Antoine Cole Consulting – Integrity + Accuracy… It all adds up.</h5>
                    <hr />
                    <p>Antoine Cole Consulting was established in 2010. We have been providing our clients with excellent service ever since. Providing them with state -of-the-art financial solutions without the difficulties of maintaining an entire accounting department. As well as, utilizing our bookkeeping and accounting services is a smart choice for any business..</p>

                </div>
                    <hr />
                </div>

            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://papanugget.github.io" target="_blank" rel="noopener noreferrer"> T-Rex Industries</a>
            </div>

        </footer>
    );
}

export default Footer;