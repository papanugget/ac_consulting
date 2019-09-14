import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class SiteNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle =  this.toggle.bind(this);
        this.state = {
            isOpen: false
         };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="dark" dark expand="md" fixed="top">
                <NavbarBrand href="/" className="mr-auto"><span className="primary-text">Antoine Cole Consulting</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen}  navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/services/">
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gallery/">
                                AirBnb
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about/">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://instagram.com/come_stay_at_the_rockaways" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'twitter']}/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default SiteNavbar;