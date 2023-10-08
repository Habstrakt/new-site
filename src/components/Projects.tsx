import React from "react";
import { Link } from "react-router-dom";
import { portfolios } from "../assets/data.ts";
import arrowUp from "../assets/img/icons/arrowup1_120992.svg";

const Projects: React.FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Портфолио</h2>
        <ul className="projects">
          {portfolios.map((item) => (
            <li key={item.id} className="project">
              <Link
                className="animated-link"
                to={{
                  pathname: `/project/${item.id}`,
                }}
              >
                <h3 className="project__title">{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <button id="myBtn" title="Go to top">
          <img src={arrowUp} />
        </button>
      </div>
    </main>
  );
};

export default Projects;
