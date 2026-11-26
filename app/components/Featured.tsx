import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type MyProject = {
  projects: Project[];
  count: number;
};

const Featured = ({ projects, count = 2 }: MyProject) => {
  if (projects.length == 0 || count === 0) return null;
  return (
    <>
      <h2 className="featured-title">our Features</h2>
      <div className="featured-container projects-grid ">
        {projects
          .map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))
          .slice(0, count)}
      </div>
    </>
  );
};

export default Featured;
