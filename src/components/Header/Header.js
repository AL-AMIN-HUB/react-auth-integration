import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">React Auth Integration</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink className="text-decoration-none fs-4 me-3" to="/home">
                Home
              </NavLink>
              <NavLink className="text-decoration-none fs-4 me-3" to="/login">
                Login
              </NavLink>
              <NavLink className="text-decoration-none fs-4 me-3" to="/register">
                Register
              </NavLink>
              <NavLink className="text-decoration-none fs-4 me-3" to="/register">
                {user?.email && <button className="btn btn-danger">Logout</button>}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
