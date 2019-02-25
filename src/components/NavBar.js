import React  from 'react';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import DeleteIcon from '@material-ui/icons/Delete'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="dark">
        <Navbar.Brand href="/home">Tembusu Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/workshop">Workshop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/project">Project</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/talk">Talk</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/committee">Committee</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar;
