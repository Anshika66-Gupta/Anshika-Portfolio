import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import care from "../../Assets/Projects/care.png";
import Unbiased from "../../Assets/Projects/unbiased.png";
import boston from "../../Assets/Projects/boston.png";


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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/Anshika66-Gupta/chatiffy/tree/main/Chatify"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={care}
            isBlog={false}
            title="MyKare Healthcare"
            description="Mykare Health is an asset light specialised surgical chain for domestic and cross-border patients, it understand the need of medical support and value your budget, thus you can choose from a multitude of facilities and customize your package accordingly."
            link="https://mykarehealth.com/"
          />
        </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Unbiased}
              isBlog={false}
              title="Unbiased ML"
              description="Our mission to Fight Fake News and misinformation, we are combining the power of Crowd-Sourcing with next-generation technologies like Blockchain, Machine Learning and AI. Our solutions are superior to the existing alternatives as it brings the best of both worlds. "
              link="https://unbiased.cc/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/Anshika66-Gupta/Editior.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boston}
              isBlog={false}
              title="Boston House Price Prediction"
              description="Housing prices are an important reflection of the economy, and housing price ranges are of great interest for both buyers and sellers. Ask a home buyer to describe their dream house, and they probably won’t begin with the height of the basement ceiling or the proximity to an east-west railroad. But this playground competition’s data-set proves that much more influences price negotiations than the number of bedrooms or a white-picket fence."
              link="https://github.com/Anshika66-Gupta/Boston-Housing-Prediction---Regression.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/Anshika66-Gupta/Face_And_Emotion_Detection/tree/main/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
