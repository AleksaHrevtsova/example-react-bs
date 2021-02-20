import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import img2 from "../images/1.jpeg";

import AuthContext from "../contexts/Auth";

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

const Jumbotron = () => (
  <AuthContext.Consumer>
    {({ name }) => {
      console.log(name);
      return (
        <Styles>
          <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
              <h1>Title about {name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                perferendis laboriosam aliquam corporis non numquam obcaecati ut
                tempora blanditiis optio nulla nisi explicabo, deleniti
                consequuntur ea molestias! Earum est eligendi sed illo quia
                placeat explicabo, commodi autem laudantium sapiente! Ex
                provident harum similique accusamus id nam, quam nisi a omnis!
              </p>
            </Container>
          </Jumbo>
        </Styles>
      );
    }}
  </AuthContext.Consumer>
);
export default Jumbotron;
