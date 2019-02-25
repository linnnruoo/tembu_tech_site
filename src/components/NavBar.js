import React  from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <>
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
      <style type="text/css">
        {`
        .nav-link {
          color: #116466
        }
        `}
      </style>
    </>
  )
}

export default NavBar;
