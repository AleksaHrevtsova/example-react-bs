import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <p>&copy; Copyright CS technology 2021</p>
      </Container>
    </Container>
  );
};
export default Footer;
