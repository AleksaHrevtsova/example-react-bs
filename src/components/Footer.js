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
        <p>&copy; Copyright PARIS-SCHOOL Art & Technologies 2020</p>
      </Container>
    </Container>
  );
};
export default Footer;
