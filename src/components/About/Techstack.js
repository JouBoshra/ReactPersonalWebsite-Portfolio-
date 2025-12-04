import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiOracle,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaServer, FaDatabase } from "react-icons/fa";
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
          <SiTypescript size={100} />
          <p style={{ fontSize: "14px" }}>TypeScript</p>
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
          <SiVuedotjs size={100} />
          <p style={{ fontSize: "14px" }}>Vue.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiNuxtdotjs size={100} />
          <p style={{ fontSize: "14px" }}>Nuxt.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <TbBrandRedux size={100} />
          <p style={{ fontSize: "14px" }}>Pinia/Vuex</p>
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
          <SiBootstrap size={100} />
          <p style={{ fontSize: "14px" }}>Bootstrap</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaCss3Alt size={100} />
          <p style={{ fontSize: "14px" }}>CSS3/SCSS</p>
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

      {/* Backend & Database Technologies */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiNodejs size={100} />
          <p style={{ fontSize: "14px" }}>Node.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiFirebase size={100} />
          <p style={{ fontSize: "14px" }}>Firebase</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiMongodb size={100} />
          <p style={{ fontSize: "14px" }}>MongoDB</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiOracle size={100} />
          <p style={{ fontSize: "14px" }}>Oracle Database</p>
        </div>
      </Col>

      {/* ERP & Enterprise */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaDatabase size={100} />
          <p style={{ fontSize: "14px" }}>NetSuite ERP</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaServer size={100} />
          <p style={{ fontSize: "14px" }}>SuiteScript</p>
        </div>
      </Col>

      {/* Version Control & Tools */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <DiGit size={100} />
          <p style={{ fontSize: "14px" }}>Git</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaGithub size={100} />
          <p style={{ fontSize: "14px" }}>GitHub</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <SiPostman size={100} />
          <p style={{ fontSize: "14px" }}>Postman</p>
        </div>
      </Col>

      {/* Process & Methodologies */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <div className="icon-container">
          <FaGitAlt size={100} />
          <p style={{ fontSize: "14px" }}>Agile/Scrum</p>
        </div>
      </Col>

      {/* UI/UX & Design */}
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
