import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import CloudSkills from "../components/CloudSkills";
import "../styles/About.css"


function About() {
  return (
    <Container fluid className="about-section">
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
              About <strong className="purple" style={{ color: "#213F99" }} >me</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple" style={{ color: "#213F99" }}>Déodat ADANDEDJAN </span>
            from <span className="purple"> Benin.</span>
            <br />
            Je suis actuellement étudiant en 3ème année de License en Génie License en Génie Logiciel à l'Institut de Formation et de Recherche en Informatique(IFRI).
            <br />
            Je suis Developpeur Fullstack (Web & Mobile) mais j'ai également des profils Designer et d'Analyste SOC Junior.
            <br />
            Passionné par le domaine Informatique je suis toujours à la recherche de nouveaux défis, connaissances et compétences !
            <br />
            <br />
            A part le développement, j'aime aussi :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ecouter la musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire des activites sportives
            </li>
            <li className="about-activity">
              <ImPointRight /> Mener des oeuvres sociales et communautaires
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Not after, Now"{" "}
          </p>
          <footer className="blockquote-footer">@deodat04</footer>
        </blockquote>
      </Card.Body>
    </Card>
    
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <CloudSkills />
       
          </Col>
        </Row>
      </Container>
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <footer style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>
        Powered by @deodat04 <br /> Copyright © 2024 Tous droits réservés
      </footer>
    </Container>
  );
}

export default About;