import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SiteNavbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li className="current">
                    Home
                </li>
                <li>About</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact</li>
                <li>
                    <FontAwesomeIcon icon={faInstagram}/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTwitterSquare}/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </li>
            </ul>
        </nav>
    )
}

export default SiteNavbar;