import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`,
  );

  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => {
    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      url: item.url,
      date: item.date,
      category: item.category,
      featured: item.featured,
      image: item.image?.url
        ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
        : "/public/images/no-image.png",
    };
  });

  console.log(projects);

  return { projects: projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  console.log(projects);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  //// filter project
  const filterdProject =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const [currentPage, setCurrentPage] = useState(1);
  /// perpage
  const projectPerPage = 10;

  // culculate the total pages
  const totalPages = Math.ceil(filterdProject.length / projectPerPage);

  // indexs
  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjetcs = filterdProject.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container-projects">
      <div className="filter-project">
        {categories.map((category) => (
          <button
            className={`category-btn ${category === selectedCategory ? "category-btn-active" : ""}`}
            onClick={() => setSelectedCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="projects-grid">
          {currentProjetcs.map((project) => (
            <motion.div layout key={project.id}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/** pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onBtnClick={setCurrentPage}
      />
    </div>
  );
};

export default ProjectsPage;
