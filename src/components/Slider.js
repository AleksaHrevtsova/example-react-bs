import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={img1} alt="img" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={img2} alt="img" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={img3} alt="img" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
