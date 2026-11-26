import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/details";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/?filters[documentId][$eq]=${id}&populate=*`,
  );
  if (!res) throw new Response("there is an Error Alex", { status: 404 });
  const json: StrapiResponse<StrapiProject> = await res.json();
  const item = json.data[0];
  const project: Project = {
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

  return { project };
}

const DetailsProjectPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <div className="project-details-container">
        <div className="box">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="box">
          <h2>{project.title}</h2>
          <p>
            {project.category} / {new Date(project.date).toLocaleDateString()}
          </p>
          <p>{project.description}</p>
          <a href={project.url} target="_blank">
            visit Site
          </a>
        </div>
      </div>
    </>
  );
};

export default DetailsProjectPage;
