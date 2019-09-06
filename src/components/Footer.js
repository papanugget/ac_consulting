import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="footer" id="main-footer">
            <div className="container-fluid">
                <div className="row text-center"  id="company">
                    <div className="col-sm">
                    < FontAwesomeIcon icon="envelope"/>  <a href="mailto:antoinecole@gmail.com">antoinecole@gmail.com</a>
                    </div>
                    <div className="col-sm">
                    < FontAwesomeIcon icon="phone-alt"/>  <a href="tel:19172950587">917-295-0587</a>
                    </div>
                    <div className="col-sm">
                    < FontAwesomeIcon icon="map-pin"/>  <a href="https://goo.gl/maps/dLyfu9qHsL4CDBZh8" target="_blank">Far Rockaway, New York</a>
                    </div>
                </div>
                <div className="row">
                    <hr className="hr-styled"/>
                </div>
                <div className="row">
                <div className="col-md">
                    <h5 className="text-uppercase">Antoine Cole Consulting – Integrity + Accuracy… It all adds up.</h5>
                    <hr />
                    <p>Antoine Cole Consulting was established in 2010. We have been providing our clients with excellent service ever since. Providing them with state -of-the-art financial solutions without the difficulties of maintaining an entire accounting department. As well as, utilizing our bookkeeping and accounting services is a smart choice for any business..</p>

                </div>
                <hr />
                <div className="col-md text-right">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>

                </div>

                </div>

            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> T-Rex Industries</a>
            </div>

            </footer>
    );
}

export default Footer;