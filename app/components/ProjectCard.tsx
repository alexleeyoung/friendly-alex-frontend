import { Link } from "react-router";
import type { Project } from "~/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className="project-link" to={`/projects/${project.documentId}`}>
      <div className="projects-box">
        <div className="projects-img">
          <img src={project.image} alt={project.title} />
        </div>
        <h2 className="projects-title">{project.title}</h2>
        <p className="projects-description">{project.description}</p>
        <div className="projects-time">
          <span>{project.category}</span>
          <span>{new Date(project.date).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
