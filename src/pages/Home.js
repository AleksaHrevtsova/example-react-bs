import React from "react";
import Slider from "../components/Slider";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";

const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container>
        <Row style={{ marginBottom: "30px" }}>
          <Col md={5}>
            <img src={img1} alt="img" height={200} />
          </Col>
          <Col md={7}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut
              necessitatibus voluptates consequatur esse nemo nulla amet sit
              quaerat fugiat, cum rerum ipsa aperiam ad odit vero voluptate
              dolorem ex corrupti! Accusamus quibusdam ab, nisi illum temporibus
              cupiditate recusandae delectus laborum maxime, at pariatur
              eligendi voluptates dolores velit culpa architecto quod fugiat?
              Eum distinctio fugit nesciunt ipsam iure a vero quod quis possimus
              accusamus? Ut temporibus, debitis veritatis est excepturi nesciunt
              tempore eos dolor dolores a sapiente eveniet quidem nemo
              consequatur, officiis in odit libero eius tempora dolorum veniam
              deleniti labore! Ea nobis minus animi saepe temporibus cumque ex
              itaque?
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          <Col md={5}>
            <img src={img3} alt="img" height={200} />
          </Col>
          <Col md={7}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut
              necessitatibus voluptates consequatur esse nemo nulla amet sit
              quaerat fugiat, cum rerum ipsa aperiam ad odit vero voluptate
              dolorem ex corrupti! Accusamus quibusdam ab, nisi illum temporibus
              cupiditate recusandae delectus laborum maxime, at pariatur
              eligendi voluptates dolores velit culpa architecto quod fugiat?
              Eum distinctio fugit nesciunt ipsam iure a vero quod quis possimus
              accusamus? Ut temporibus, debitis veritatis est excepturi nesciunt
              tempore eos dolor dolores a sapiente eveniet quidem nemo
              consequatur, officiis in odit libero eius tempora dolorum veniam
              deleniti labore! Ea nobis minus animi saepe temporibus cumque ex
              itaque?
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
