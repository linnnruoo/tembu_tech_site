import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as NavStrap,
    NavItem,
    NavLink
} from 'reactstrap';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this._toggle = this._toggle.bind(this);
  }
  _toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar expand="md" color="dark" dark fixed="top" className="flex-shrink-0">
        <NavbarBrand tag={Link} to="/" className="d-flex w-50 mr-auto">Tembusu Tech</NavbarBrand>
        <NavbarToggler onClick={this._toggle} className={this.state.isOpen ? '': 'collapsed'}>
          <span className="icon-bar top-bar"></span>
	        <span className="icon-bar middle-bar"></span>
	        <span className="icon-bar bottom-bar"></span>
        </NavbarToggler>

        <Collapse isOpen={this.state.isOpen} navbar className="w-100">
          <NavStrap className="ml-auto w-100 justify-content-end" navbar>
            <NavItem>
              <NavLink tag={Link} exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/workshop">Workshop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/project">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/talk">Talk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="#committee">Committee</NavLink>
            </NavItem>
          </NavStrap>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;