import React from "react";
import "../styles/ContainerSkills.css";
import {
  Css3OriginalWordmark,
  Html5OriginalWordmark,
  JavascriptOriginal,
  ReactOriginalWordmark,
  FlutterOriginal,
  BootstrapOriginalWordmark,
} from "devicons-react"; // Frontend
import {
  ExpressOriginal,
  JavaOriginal,
  NodejsOriginalWordmark,
  PhpOriginal,
  PythonOriginalWordmark,
  LaravelOriginalWordmark,
  SpringOriginalWordmark,
} from "devicons-react"; // Backend
import {
  FirebaseOriginal,
  MysqlOriginalWordmark,
  PostmanOriginalWordmark,
  VercelOriginalWordmark,
  WordpressPlainWordmark,
  GithubOriginalWordmark,
} from "devicons-react"; // Déploiements et Ops
import {
  FigmaOriginal,
  IllustratorLine,
  PhotoshopOriginal,
  XdOriginal,
} from "devicons-react"; // Design

function ContainerSkills() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* FRONTEND */}
        <div className="col-lg-4 mb-4">
          <div className="card bg-transparent border-0 shadow">
            <div className="card-body">
              <h2 className="category-title">FRONTEND</h2>
              <div className="row">
                <div className="col-4 mb-3">
                  <div className="icon">
                    <Css3OriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <Html5OriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <JavascriptOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <ReactOriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <FlutterOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <BootstrapOriginalWordmark size="60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*BACKEND*/}
        <div className="col-lg-4 mb-4">
          <div className="card bg-transparent border-0 shadow">
            <div className="card-body">
              <h2 className="category-title">BACKEND</h2>
              <div className="row">
                <div className="col-4 mb-3">
                  <div className="icon">
                    <ExpressOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <JavaOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <NodejsOriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <PhpOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <PythonOriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <SpringOriginalWordmark size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <LaravelOriginalWordmark size="60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*DESIGN*/}
        <div className="col-lg-4 mb-4">
          <div className="card bg-transparent border-0 shadow">
            <div className="card-body">
              <h2 className="category-title">DESIGN</h2>
              <div className="row mb-4">
                <div className="col-4">
                  <div className="icon">
                    <FigmaOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <IllustratorLine size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <PhotoshopOriginal size="60" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="icon">
                    <XdOriginal size="60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     {/* DEPLOIEMENT AND OPS */}
<div className="col-lg-15 mb-4">
  <div className="card bg-transparent border-0 shadow">
    <div className="card-body">
      <h2 className="category-title">DEPLOIEMENT & OPS</h2>
      <div className="row">
        <div className="col mb-3">
          <div className="icon">
            <FirebaseOriginal size="60" />
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <MysqlOriginalWordmark size="60" />
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <PostmanOriginalWordmark size="70" />
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <VercelOriginalWordmark size="60" />
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <WordpressPlainWordmark size="60" />
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <GithubOriginalWordmark size="60" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default ContainerSkills;
