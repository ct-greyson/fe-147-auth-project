import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logout from "./Logout";
import Login from "./Login";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Auth0</Navbar.Brand>
        <Navbar.Toggle />
        {isAuthenticated ? (
          <>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="/profile">{user?.name}</a>
              </Navbar.Text>
            </Navbar.Collapse>
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
