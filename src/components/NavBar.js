import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as NavStrap,
    NavItem,
} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import logo from '../images/circuit_tree.svg';
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
      <Scrollspy items={['home', 'workshop', 'project', 'talk', 'committee', 'gallery']} currentClassName="is-current">
        <Navbar id="navbar" expand="sm" fixed="top" className="flex-shrink-0">
          <NavbarBrand href="#home" className="d-flex w-50 mr-auto">
            {/* <img src={logo} alt="Tembusu Tech" className="nav-logo" /> */}
            <Typography color="primary">Tembusu Technologies</Typography>
          </NavbarBrand>
          <NavbarToggler onClick={this._toggle} className={this.state.isOpen ? '': 'collapsed'}>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </NavbarToggler>

          <Collapse isOpen={this.state.isOpen} navbar className="w-100">
            <NavStrap className="ml-auto w-100 justify-content-end" navbar>
              <NavItem className="nav-item">
                <a href="#home">
                  <Typography color="primary">Home</Typography>
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a href="#workshop">
                  <Typography color="primary">Workshop</Typography>
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a href="#project">
                  <Typography color="primary">Project</Typography>
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a href="#talk">
                  <Typography color="primary">Talk</Typography>
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a href="#committee">
                  <Typography color="primary">Committee</Typography>
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a href="#gallery">
                  <Typography color="primary">Gallery</Typography>
                </a>
              </NavItem>
            </NavStrap>
          </Collapse>
        </Navbar>
      </Scrollspy>
    );
  }
}

export default Nav;