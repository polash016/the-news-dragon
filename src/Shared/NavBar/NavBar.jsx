import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
  return (
      <Container className="mb-4">
    <Navbar collapseOnSelect expand="lg" bg="secondary-subtle">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
            <Nav.Link href="/category/0">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            {user && <FaUserCircle></FaUserCircle>}
          {user ? <Link onClick={handleLogOut} to='/login'><Button variant="secondary">Logout</Button></Link>:
          <Link to='/login'><Button variant="secondary">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  );
};

export default NavBar;
