import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolios } from "../assets/data.ts";
import { Portfolios } from "../types.ts";
import Spinner from "../components/Spinner.tsx";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [projectData, setProjectData] = useState<Portfolios | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      const selectedProject = portfolios.find(
        (item: Portfolios) => item.id === parseInt(id, 10),
      );

      if (selectedProject) {
        setProjectData(selectedProject);
      }
    }
  }, [id]);

  if (!projectData) {
    return <Spinner />;
  }

  return (
    <>
      <main className="section section--light">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1"> {projectData.title}</h1>

            <div className="project-details__desc">
              <p>{projectData.instruments}</p>
              <p className="project-details__text">{projectData.text}</p>
            </div>

            <Link className="btn-outline" to={projectData.url} target="_blank">
              <p>
                <strong>Просмотреть приложение</strong>
              </p>
            </Link>
            <Link className="btn-outline backBtn" to="/">
              <p>
                <strong>Назад</strong>
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
