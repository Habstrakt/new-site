import React from "react";

const Skills: React.FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Skills</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              JavaScript, TypeScript, ReactJS, Redux-Toolkit, Vue3, Pinia, HTML,
              CSS, BootStrap, StyledComponents
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Backend</h2>
            <p>PHP, Laravel</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
