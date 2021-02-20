import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/back1.jpg";
import img2 from "../images/back2.jpg";
import img3 from "../images/back3.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "666px" }}>
        <img className="d-block w-100" src={img1} alt="img" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "666px" }}>
        <img className="d-block w-100" src={img2} alt="img" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "666px" }}>
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
