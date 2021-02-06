import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/pexels-photo-459301.jpeg";
import img2 from "../images/pexels-photo-5562777.jpeg";
import img3 from "../images/pexels-photo-5738449.jpeg";

const Styles = styled.div`
  .jumbo {
    background: url(${img2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Main Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            perferendis laboriosam aliquam corporis non numquam obcaecati ut
            tempora blanditiis optio nulla nisi explicabo, deleniti consequuntur
            ea molestias! Earum est eligendi sed illo quia placeat explicabo,
            commodi autem laudantium sapiente! Ex provident harum similique
            accusamus id nam, quam nisi a omnis!
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
};
export default Jumbotron;
