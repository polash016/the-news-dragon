import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
      <Container className="mb-4">
    <Navbar collapseOnSelect expand="lg" bg="secondary-subtle">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  );
};

export default NavBar;
