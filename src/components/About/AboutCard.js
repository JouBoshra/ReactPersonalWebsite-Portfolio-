import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Youssef Boshra</span>{" "}
            from <span className="purple">Cairo, Egypt</span>.
            <br />
            I am currently working as a Software Engineer at Brain Health USA (Remote - California), specializing in Full Stack Development with Vue.js, Nuxt.js, and NetSuite ERP customization.
            <br />
            I hold a Bachelor's degree in Business Administration from Ain Shams
            University, and I am actively expanding my skills in web
            development, particularly with Vue.js, React.js, TypeScript, and enterprise solutions.
            <br />
            <br />
            Apart from coding, here are some activities that I love to pursue:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies & Frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects & Enhancing My Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing Knowledge & Writing Technical Articles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always strive to learn, grow, and build things that make an
            impact!"
          </p>
          <footer className="blockquote-footer">Youssef Boshra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
