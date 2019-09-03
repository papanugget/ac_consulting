import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SiteNavbar = () => {
    return (
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Antoine Cole Consulting</NavbarBrand>
                <NavbarToggler className="mr-2" />
                <Collapse navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default SiteNavbar;