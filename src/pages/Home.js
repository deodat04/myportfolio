import React from "react";
import ContainerSkills from "../components/ContainerSkills";
import Type from "../components/Type";
import "../styles/Home.css";
import ContainerServices from "../components/ContainerServices";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import python from "../assets/python.png"
import eventflow from "../assets/eventflow.png"
import springboot from "../assets/spring-boot.png"
import frontpic from "../assets/frontpicbg.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section>
        <div className="main">
          <div className="detail">
            <h1 style={{ fontFamily: "monospace" }}>
              <span style={{ fontFamily: "monospace" }}>Hi, It's Me</span>{" "}
              <br /> I'm <span style={{ color: "#213F99" }}>@deodat04</span>
            </h1>
            <h1 style={{ fontFamily: "monospace", color: "#213F99", fontSize: 30 }}>
            <Type /> 
            </h1>
            <div className="social">
              <a href="https://github.com/deodat04">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/deodatadandedjan/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/d%C3%A9odat-adandedjan-4b2672241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/+22996704532">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="images">
            <img src={frontpic} alt="" width="90%" />
          </div>
        </div>
      </section><br/><br/>

      <div id="title_skills">
        <h1
          className="sub-title"
          style={{
            textAlign: "center",
            color: "#000000",
            fontFamily: "monospace",
          }}
        >
          @deodat04 Skills
        </h1>
        <br /> <br /> <br />
      </div>
      <div className="container">
        <ContainerSkills />
      </div>
      <br />
      <h1
        className="sub-title"
        style={{
          textAlign: "center",
          color: "#000000",
          fontFamily: "monospace",
        }}
      >
        @deodat04 Services
      </h1>
      <ContainerServices />

      <div id="portfolio">
        <div className="containeur">
          <h1
            className="sub-title"
            style={{
              color: "#000000",
              textAlign: "center",
              fontFamily: "monospace",
            }}
          >
            Mes travaux récents
          </h1>
          <h3
            style={{
              color: "#000000",
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: 20,
            }}
          >
            Quelques projets sur lesquels j'ai eu à travaillé. Vous désirez en
            savoir plus?{" "}
            <a
              className="has-text-weight-normal"
              href="mailto:deodatadandedjan2000@gmail.com"
            >
              {" "}
              Email me
            </a>
          </h3>
          <div className="work-list">
            <div className="work">  
              <img src={eventflow} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>EventFlow</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Mobile App</p>
                <a href="https://github.com/deodat04/EventFlow-Mobile_App.git">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={springboot} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>API CRUD</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>SpringBoot</p>
                <a href="https://github.com/deodat04/api_deodat04.git">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={python} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Python Programs</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Animation Turtle and others</p>
                <a href="https://github.com/deodat04/Python.git">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <Link to="/project" className="btn">
            See more
          </Link> 
        </div>
      </div>
      <footer style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>
        Powered by @deodat04 <br /> Copyright © 2024 Tous droits réservés
      </footer>
    </div>
  );
}

export default Home;
