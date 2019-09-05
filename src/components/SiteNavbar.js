import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SiteNavbar = () => {
    return (
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="mr-auto">Antoine Cole Consulting</NavbarBrand>
                 <NavbarToggler className="mr-2" />
                    <Collapse navbar isOpen="true">
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://instagram.com/come_stay_at_the_rockaways" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com" target="_blank">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://linkedin.com" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
    )
}

export default SiteNavbar;