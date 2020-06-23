import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import brandLogo from '../imgs/icons/logo_icon.svg';
import {
  NavLink
} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
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
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/works"><img src={brandLogo} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink activeClassName="active" to="/works">Works</NavLink>
              </NavItem>
              <span className="navbar-text">
                /
              </span>
              <NavItem>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
              </NavItem>
              <span className="navbar-text">
                /
              </span>
              <NavItem>
                <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
              </NavItem>
              <span className="navbar-text">
                /
              </span>
              <NavItem>
                <NavLink exact activeClassName="active" to="/photo_blog">Photo Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavBar;
