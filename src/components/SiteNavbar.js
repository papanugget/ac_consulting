import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  } from 'reactstrap';
import Home from './Home';
import ServicesList from './ServicesList';
import ImageGallery from './ImageGallery';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route, Switch,  Link as NavLink } from 'react-router-dom';

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
            <Router>
                 <Navbar color="dark" dark expand="md" fixed="top" id="navbar">
                    <NavbarBrand href="/home" className="mr-auto">Antoine Cole Consulting</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen}  navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" exact to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" exact to="/services">
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" exact to="/gallery">
                                    AirBnb
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                exact to="/contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                exact to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://instagram.com/come_stay_at_the_rockaways" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                                </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>

                <Switch>
                    <Route path="/home" component={Home} exact/>
                    <Route path="/services" component={ServicesList} exact/>
                    <Route path="/gallery" component={ImageGallery} exact/>
                    <Route path="/contact" component={Contact} exact/>
                    <Route path="/about" component={About} exact/>
                </Switch>

            </Router>

        );
    }
}

export default SiteNavbar;