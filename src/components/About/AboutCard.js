import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anshika Gupta </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am pursuing BTech in Electronics and Communication Engineering From GNDU
            Amritsar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Better Learn, Implement Then Execute"{" "}
          </p>
          <footer className="blockquote-footer">Anshika Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
