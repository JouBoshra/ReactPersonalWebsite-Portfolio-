import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const aiHrImg = "/Assets/Projects/ai-hr.png";
const aiHrDashboardImg = "/Assets/Projects/ai-hr-dashboard.png";
const businessImg = "/Assets/Projects/business.png";
const fitnessImg = "/Assets/Projects/fitness.png";
const weatherImg = "/Assets/Projects/weather.jpg";
const Danielporfolio = "/Assets/Projects/portfolio.png";
const bookmarkImg = "/Assets/Projects/bookmark.jpg";
const devfolioImg = "/Assets/Projects/devFolio.png";
const weatherReactImg = "/Assets/Projects/weatherReact.jpg";
const taskManagerImg = "/Assets/Projects/taskManager.png";
const eCommerceWebsite = "/Assets/Projects/eCommerceWebsite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Some involve
          integrating APIs and are currently under development, so stay tuned
          for more updates.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* AI HR Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiHrImg}
              isBlog={false}
              title="AI HR Platform"
              description="An AI-powered hiring assistant platform built with Nuxt.js and Vue 3. Handles the entire hiring process from job posting to offer letters with automated workflows, beta waitlist management, and modern UI/UX design."
              demoLink="https://hr-user.id3m.dev/"
            />
          </Col>
          {/* AI HR Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiHrDashboardImg}
              isBlog={false}
              title="AI HR Dashboard"
              description="Enterprise admin dashboard for AI HR platform built with Vue.js. Features comprehensive hiring analytics, user management, job posting controls, and real-time data visualization with ApexCharts integration."
              demoLink="https://hr-admin.id3m.dev/"
            />
          </Col>
          {/* E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerceWebsite}
              isBlog={false}
              title="E-Commerce Website"
              description="A fully responsive E-Commerce application built using modern web technologies. It integrates real-world APIs, provides a seamless shopping experience, and includes dynamic cart functionality."
              ghLink="https://github.com/JouBoshra/-E-Commerce-Website"
              demoLink="https://e-commerce-website-rouge-gamma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={businessImg}
              isBlog={false}
              title="Business Management Platform"
              description="Contributed as a team member at SprintsAI to develop a comprehensive business management platform. This platform optimizes business operations with modern tech stacks and integrates APIs for seamless functionality."
              ghLink="https://github.com/engrBassel/business-management-platform"
              demoLink="https://my-business2024.web.app/"
            />
          </Col>
          {/* Fitness Tracking App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessImg}
              isBlog={false}
              title="Fitness Tracking App"
              description="Developed a fitness tracking app to help users log their workouts, track progress, and set fitness goals. Built with React and features a user-friendly interface and data visualization."
              ghLink="https://github.com/JouBoshra/Fitness-Tracking-App"
              demoLink="https://fitness-tracking-app-six.vercel.app/sign-in"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherImg}
              isBlog={false}
              title="Weather App"
              description="A weather app built with React that fetches real-time weather data from an external API. Users can search for city-specific weather details such as temperature, humidity, and forecasts."
              ghLink="https://github.com/JouBoshra/WeatherApp"
              demoLink="https://jouboshra.github.io/WeatherApp/"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Danielporfolio}
              isBlog={false}
              title="Daniel's Portfolio"
              description="A clean and responsive personal portfolio website showcasing skills, projects, and experience. Built with React and designed with a modern layout."
              ghLink="https://github.com/JouBoshra/Daniel-s-porfolio"
              demoLink="https://jouboshra.github.io/Daniel-s-porfolio/"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookmarkImg}
              isBlog={false}
              title="Bookmark Manager"
              description="A web app for organizing and managing bookmarks. Allows users to save, categorize, and retrieve favorite websites with an intuitive interface."
              ghLink="https://github.com/JouBoshra/Bookmark-Manager"
              demoLink="https://jouboshra.github.io/Bookmark-Manager/"
            />
          </Col>

          {/* Project 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devfolioImg}
              isBlog={false}
              title="Dev-folio"
              description="A developer portfolio showcasing skills, projects, and experience. Built with React and styled for a visually appealing layout. Fully customizable to suit individual needs."
              ghLink="https://github.com/JouBoshra/Dev-folio"
              demoLink="https://jouboshra.github.io/Dev-folio/"
            />
          </Col>

          {/* Project 7 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherReactImg}
              isBlog={false}
              title="Weather App ReactJs"
              description="An advanced weather app built with ReactJs, fetching and displaying real-time weather data using APIs. Provides an intuitive and interactive experience for users."
              ghLink="https://github.com/JouBoshra/WeatherAppReactJs"
              demoLink="https://weather-app-react-js-1u97.vercel.app"
            />
          </Col>

          {/* Project 8 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManagerImg}
              isBlog={false}
              title="Task Management Application"
              description="A task management app designed to help users organize and track their daily tasks. Features task addition, deadline settings, and progress tracking in a clean UI."
              ghLink="https://github.com/JouBoshra/Task-Management-Application"
              demoLink="https://task-management-application-lac.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
