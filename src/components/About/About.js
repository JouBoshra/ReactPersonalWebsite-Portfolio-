import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css";
import {
  FaComments,
  FaRegLightbulb,
  FaHandsHelping,
  FaCogs,
  FaClock,
  FaBrain,
} from "react-icons/fa"; // Soft Skills Icons

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

        {/* Soft Skills Icons Row */}
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
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
