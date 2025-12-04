import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import "./About.css";
import {
  FaComments,
  FaRegLightbulb,
  FaHandsHelping,
  FaCogs,
  FaClock,
  FaBrain,
  FaAward,
  FaMedal,
  FaCertificate,
} from "react-icons/fa";

const laptopImg = "/Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Soft Skills</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaComments size={100} />
              <p style={{ fontSize: "14px" }}>Communication</p>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaRegLightbulb size={100} />
              <p style={{ fontSize: "14px" }}>Problem-Solving</p>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaHandsHelping size={100} />
              <p style={{ fontSize: "14px" }}>Teamwork</p>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaCogs size={100} />
              <p style={{ fontSize: "14px" }}>Adaptability</p>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaClock size={100} />
              <p style={{ fontSize: "14px" }}>Time Management</p>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaBrain size={100} />
              <p style={{ fontSize: "14px" }}>Critical Thinking</p>
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaAward size={100} className="achievement-icon" />
              <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                Recognized by Sprints
              </p>
              <Button
                variant="primary"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7224747128835715072/"
                target="_blank"
                className="achievement-btn"
              >
                View
              </Button>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaMedal size={100} className="achievement-icon" />
              <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                Leadership in Action
              </p>
              <Button
                variant="primary"
                href="https://www.facebook.com/photo?fbid=602814518687019&set=a.397984175836722"
                target="_blank"
                className="achievement-btn"
              >
                View
              </Button>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons text-center">
            <div className="icon-container">
              <FaCertificate size={100} className="achievement-icon" />
              <p style={{ fontSize: "14px", paddingTop: "10px" }}>
                Agile Workshop Leader
              </p>
              <Button
                variant="primary"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid02PFMfQfED9vkAijd6QWWVhnGACQ2a7mo5wJB9kzz5eJWJS4FKfhtWixVEV92iZzxhl&id=100068754286644"
                target="_blank"
                className="achievement-btn"
              >
                View
              </Button>
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
