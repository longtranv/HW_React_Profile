import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import eshop from "../../Assets/Projects/e-shop.png";
import pingpong from "../../Assets/Projects/ping pong python.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eshop}
              isBlog={false}
              title="fashion shop"
              description="online shop where people could buy some shirts or pants."
              ghLink="https://github.com/longtranv/fashion_shop_react.git"
              demoLink="https://fashion-shop-react.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pingpong}
              isBlog={false}
              title="two players ping pong game"
              description="simple ping pong game using pyglet to develop"
              ghLink="https://github.com/longtranv/ping-pong-LAN-multiplayer.git"
              demoLink="https://github.com/longtranv/ping-pong-LAN-multiplayer.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
