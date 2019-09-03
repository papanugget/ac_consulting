import React from 'react';
import SiteNavbar from './SiteNavbar'

const Header = () => {
    return(
        <header id="main-header">
            <div className="container">
                <div className="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
                    <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                        <SiteNavbar/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;