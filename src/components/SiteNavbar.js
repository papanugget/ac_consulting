import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu  } from 'reactstrap';
import { Link } from 'react-router-dom';

class SiteNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle =  this.toggle.bind(this);
        this.dropToggle = this.dropToggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
         };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    dropToggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <Navbar color="dark" dark expand="md" fixed="top" id="navbar">
                <NavbarBrand href="/" className="mr-auto">Antoine Cole Consulting</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen}  navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/" activeClassName="current">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/services" activeClassName="current">
                                Services
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link"  to="/gallery"
                            activeClassName="current">
                                AirBnb
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link"
                            to="/contact"
                            activeClassName="current">
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link"
                            to="/about" activeClassName="current">
                                About
                            </Link>
                        </NavItem>

                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.dropToggle}>
                            <DropdownToggle nav caret>
                            Social
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem>
                                <NavLink href="https://instagram.com/come_stay_at_the_rockaways" target="_blank" rel="noopener noreferrer" className="nav-link text-muted">
                                    <FontAwesomeIcon icon={['fab', 'instagram']}/> <small>Instagram</small>
                                </NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="https://www.facebook.com/erica.antoinecole" target="_blank" rel="noopener noreferrer" className="nav-link text-muted">
                                    <FontAwesomeIcon icon={['fab', 'facebook']}/><small>Facebook</small>
                                </NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="https://twitter.com/antoinecole67" target="_blank" rel="noopener noreferrer" className="nav-link text-muted">
                                        <FontAwesomeIcon icon={['fab', 'twitter']}/> <small>Twitter</small>
                                </NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="https://www.linkedin.com/in/erica-cole-63714434/" target="_blank" rel="noopener noreferrer" className="nav-link text-muted">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']}/> <small>LinkedIn</small>
                                </NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="https://www.alignable.com/far-rockaway-ny-2/antoine-cole-consulting" target="_blank" rel="noopener noreferrer" className="nav-link text-muted" >
                                    <svg width="20" height="20" viewbox="0 0 125 29">
                                        <g fill="none" fill-rule="evenodd">
                                        <path d="M20.419 8.096c-1.35-3.814-5.066-6.562-9.43-6.562a10.057 10.057 0 0 0-3.272.54l.15.454c.246.735.501 1.501.769 2.265.157.448.319.893.484 1.33.524 1.387 1.09 2.683 1.702 3.656.27.428.55.786.839 1.07.418.407.855.652 1.314.652.672 0 1.297-.505 1.88-1.318.5.976 1.009 2.244 1.451 3.447-.934.783-2.02 1.254-3.33 1.254a4.94 4.94 0 0 1-2.627-.746 6.07 6.07 0 0 1-1.036-.789c-.92-.88-1.683-2.087-2.354-3.47-.234-.486-.459-.99-.673-1.514-.597-1.454-1.13-3.027-1.652-4.595a9.91 9.91 0 0 0-.994.922C2.01 6.424 1.014 8.731 1.014 11.26c0 2.211.762 4.25 2.04 5.886.29.37.605.72.944 1.045.36-.994.7-2.015 1.02-2.978.428-1.288.86-2.582 1.328-3.815.71 1.292 1.534 2.401 2.524 3.218-.19.555-.373 1.105-.551 1.64-.437 1.316-.879 2.642-1.358 3.9a10.09 10.09 0 0 0 4.028.832c2.68 0 5.114-1.038 6.908-2.72.343-.322.66-.666.954-1.032l-.33-.987c-.244-.733-.499-1.499-.767-2.26a60.783 60.783 0 0 0-.484-1.332c-.523-1.385-1.087-2.682-1.701-3.656a5.827 5.827 0 0 0-.84-1.07 3.21 3.21 0 0 0-.315-.274c-.32-.24-.651-.378-.996-.378-.672 0-1.298.504-1.881 1.318-.5-.977-1.009-2.243-1.452-3.446a6.75 6.75 0 0 1 .357-.28c.853-.615 1.828-.975 2.975-.975h.003c.991 0 1.853.276 2.623.745.365.223.712.48 1.036.789.92.88 1.682 2.088 2.353 3.472.235.485.458.99.674 1.514.271.662.529 1.35.778 2.05a9.6 9.6 0 0 0 .08-1.205 9.45 9.45 0 0 0-.545-3.164" fill="#999"></path>
                                        </g>
                                    </svg>
                                    <small>Alignable</small>
                                </NavLink>
                            </DropdownItem>

                            </DropdownMenu>
                        </Dropdown>
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default SiteNavbar;