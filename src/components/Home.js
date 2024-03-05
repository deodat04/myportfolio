import React from "react";
// import Header from "./Header";
import picture from "../assets/mitm2.jpg";
import ContainerSkills from "./ContainerSkills";
import Type from "./Type";
import "../styles/Home.css";
import ContainerServices from "./ContainerServices";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <div>
      {/* <Header /> */}
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
            {/* <p style={{ fontFamily: "monospace" }}>
             console.log("Welcome in my world"){" "}
            </p> */}
            <div className="social">
              <a href="https://github.com/deodat04">
                <i className="bi bi-github"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/d%C3%A9odat-adandedjan-4b2672241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className="images">
            <img src={picture} alt="" width="100%" />
          </div>
        </div>
      </section>

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
              <img src={picture} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Application C++</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>With framework Qt</p>
                <a href="https://github.com/deodat04">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={picture} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>API CRUD</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Java languages</p>
                <a href="https://github.com/deodat04">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={picture} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>App mobile</h2>
                <p style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>With Flutter</p>
                <a href="https://github.com/deodat04">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <a href="project.php" className="btn">
            See more
          </a>
        </div>
      </div>
      <footer style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>
        Powered by @deodat04 <br /> Copyright © 2024 Tous droits réservés
      </footer>
    </div>
  );
}

export default Home;
