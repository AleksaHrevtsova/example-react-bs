import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import withAuthContext from "./hoc/withAuthContext";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 12,
  },
};

const NaviBar = ({ auth }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>CS Technology</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link to="/">
                  {/* HOME */}
                  <Link to="/">HOME</Link>
                </Nav.Link>
                <Nav.Link>
                  {/* USERS */}
                  <Link to="/users">USERS</Link>
                </Nav.Link>
                <Nav.Link>
                  {/* ABOUT */}
                  <Link to="/about">ABOUT</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {auth.user ? (
                  <div style={styles.container}>
                    <img
                      src={auth.user.avatar}
                      alt={auth.user.name}
                      width="32"
                      tyle={styles.avatar}
                    />
                    <span style={styles.name}>Hello, {auth.user.name}</span>
                    <button type="button" onClick={auth.onLogout}>
                      Log Out
                    </button>
                  </div>
                ) : (
                  <>
                    {" "}
                    <Button
                      variant="primary"
                      className="mr-2"
                      // onClick={handleShow}
                      onClick={auth.onLogin}
                    >
                      Log In
                    </Button>
                    <Button
                      variant="primary"
                      // onClick={handleShow}
                      onClick={auth.onLogin}
                    >
                      Sign UP
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" placeholder="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  );
};
export default withAuthContext(NaviBar);
