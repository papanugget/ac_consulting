import React from 'react';
// import React from '@fortawesome/fontawesome-free';

const Footer = () => {
    return(
        <footer className="footer" id="main-footer">
            <div className="container-fluid">
                <div className="row"  id="company">
                    <div className="col-sm">
                        Email
                    </div>
                    <div className="col-sm">
                        Phone
                    </div>
                    <div className="col-sm">
                        Location
                    </div>
                </div>
                <div className="row">
                <div className="col-md">
                    <h5 className="text-uppercase">Antoine Cole Consulting – Integrity + Accuracy… It all adds up.</h5>
                    <hr />
                    <p>Antoine Cole Consulting was established in 2010. We have been providing our clients with excellent service ever since. Providing them with state -of-the-art financial solutions without the difficulties of maintaining an entire accounting department. As well as, utilizing our bookkeeping and accounting services is a smart choice for any business..</p>

                </div>
                <hr />
                <div className="col-md ">
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
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>

            </footer>
    );
}

export default Footer;