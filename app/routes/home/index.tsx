import Hero from "~/components/Hero";
import type { Route } from "./+types/index";
import Featured from "~/components/Featured";
import type {
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from "~/types";
import AboutReview from "../../components/AboutReview";
import type { PostMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "my friendly Alex | Welcome " },
    { name: "description", content: "this is a custom devlopement website!" },
  ];
}

export async function loader({
  request,
}: Route.ActionArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`,
    ),
    fetch(
      `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`,
    ),
  ]);

  if (!projectRes.ok || !postRes.ok) throw new Error("can not fetch Data");

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/public/images/no-image.png",
  }));

  const projects = projectJson.data.map((item) => ({
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
  }));

  return { projects, posts };
}

const Home = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <div className="container-home">
        <Hero name={"Alex"} />
        <Featured projects={projects} count={4} />
        <AboutReview />
        <LatestPosts posts={posts} />
      </div>
    </>
  );
};
export default Home;
