import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  } from 'reactstrap';
import Home from './Home';
import ServicesList from './ServicesList';
import ImageGallery from './ImageGallery';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route, Switch,  Link } from 'react-router-dom';

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
                    <NavbarBrand href="/ac_consulting/" className="mr-auto">Antoine Cole Consulting</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen}  navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/ac_consulting/" activeClassName="current">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/ac_consulting/services" activeClassName="current">
                                    Services
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link"  to="/ac_consulting/gallery"
                                activeClassName="current">
                                    AirBnb
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link"
                                to="/ac_consulting/contact"
                                activeClassName="current">
                                    Contact
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link"
                                to="/ac_consulting/about" activeClassName="current">
                                    About
                                </Link>
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
                    <Route path="/ac_consulting/" component={Home} exact/>
                    <Route path="/ac_consulting/services" component={ServicesList} exact/>
                    <Route path="/ac_consulting/gallery" component={ImageGallery} exact/>
                    <Route path="/ac_consulting/contact" component={Contact} exact/>
                    <Route path="/ac_consulting/about" component={About} exact/>
                </Switch>

            </Router>

        );
    }
}

export default SiteNavbar;