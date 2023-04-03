import Flutter from "../../assets/flutter.png";
import SQLite from "../../assets/sqlite.png";

import React from "../../assets/react-js.png";

import Dart from "../../assets/dart.png";
import ES6 from "../../assets/es6.png";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SkillSection = () => {
  return (
    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Frameworks</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item  ">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Flutter</Tooltip>}
            >
              <img
                style={{ filter: "grayscale(90%)" }}
                src={Flutter}
                height={35}
                width={35}
                alt="flutter"
              />
            </OverlayTrigger>
          </li>
          <li className="list-inline-item">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">React Native</Tooltip>}
            >
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
            </OverlayTrigger>
          </li>
          <li className="list-inline-item">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">React JS</Tooltip>}
            >
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
            </OverlayTrigger>
          </li>
        </ul>
        <div class="subheading mb-3">Programming Languages</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item ">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Dart</Tooltip>}
            >
              <img
                style={{ filter: "grayscale(90%)", marginBottom: 10 }}
                src={Dart}
                height={40}
                width={40}
                alt="flutter"
              />
            </OverlayTrigger>
          </li>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}
          >
            <li class="list-inline-item">
              <i class="fab fa-js-square"></i>
            </li>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-disabled">ES6</Tooltip>}
          >
            <img
              style={{ filter: "grayscale(50%)", marginBottom: 10 }}
              src={ES6}
              height={40}
              width={40}
              alt="flutter"
            />
          </OverlayTrigger>
        </ul>
        <div class="subheading mb-3">Other Tools</div>
        <ul class="subheading list-inline">
          <li class="list-inline-item">
            <i class="fab fab-database"></i>{" "}
            <img
              style={{ filter: "grayscale(90%)" }}
              src={SQLite}
              height={20}
              width={20}
              alt="sqlite"
            />
            &nbsp; SQLite
          </li>
          <li class="list-inline-item">
            <i class="fab fa-jira"></i>
            &nbsp; JIRA
          </li>
          <li class="list-inline-item">
            <i class="fab fa-github"></i>&nbsp;Git
          </li>
          <li class="list-inline-item">
            <i class="fab fa-bitbucket"></i>bitbucket
          </li>
        </ul>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillSection;
