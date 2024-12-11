import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiJavascript,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdWeb } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiJavascript size={100} />
          <p style={{ fontSize: "14px" }}>JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiReact size={100} />
          <p style={{ fontSize: "14px" }}>React.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiTailwindcss size={100} />
          <p style={{ fontSize: "14px" }}>Tailwind CSS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaCss3Alt size={100} />
          <p style={{ fontSize: "14px" }}>CSS3</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaHtml5 size={100} />
          <p style={{ fontSize: "14px" }}>HTML5</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <MdWeb size={100} />
          <p style={{ fontSize: "14px" }}>Responsive Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <IoIosPhonePortrait size={100} />
          <p style={{ fontSize: "14px" }}>Mobile-First Design</p>
        </div>
      </Col>

      {/* Backend & API Technologies */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiNodejs size={100} />
          <p style={{ fontSize: "14px" }}>Node.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiMongodb size={100} />
          <p style={{ fontSize: "14px" }}>MongoDB</p>
        </div>
      </Col>

      {/* Other Technologies & Tools */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiGit size={100} />
          <p style={{ fontSize: "14px" }}>Git & GitHub</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaGithub size={100} />
          <p style={{ fontSize: "14px" }}>GitHub</p>
        </div>
      </Col>

      {/* Process & Methodologies */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaGitAlt size={100} />
          <p style={{ fontSize: "14px" }}>Agile/Scrum</p>
        </div>
      </Col>

      {/* API Testing & Debugging */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiSolidity size={100} />
          <p style={{ fontSize: "14px" }}>API Testing</p>
        </div>
      </Col>

      {/* UI/UX & Design Tools */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiNextdotjs size={100} />
          <p style={{ fontSize: "14px" }}>UI/UX Design</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
