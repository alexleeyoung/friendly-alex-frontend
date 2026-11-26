import type { Route } from "./+types/details";
import type { PostMeta, StrapiPost, StrapiResponse } from "~/types";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/?filters[slug][$eq]=${slug}&populate=*`,
  );
  if (!res) throw new Error("failed to fetch Data");
  const json: StrapiResponse<StrapiPost> = await res.json();
  const item = json.data[0];
  const postMeta: PostMeta = {
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/public/images/no-image.png",
  };

  return {
    postMeta,
  };
}
const DetailsBlog = ({ loaderData }: Route.ComponentProps) => {
  const { postMeta } = loaderData;
  console.log(postMeta);
  return (
    <>
      <div className="prose prose-invert blog-d-container">
        <h2 className="blog-d-title">{postMeta.title}</h2>
        <p className="blog-d-date">
          {new Date(postMeta.date).toLocaleDateString()}
        </p>
        <img
          className="blog-d-image"
          src={postMeta.image}
          alt={postMeta.title}
        />
        <ReactMarkdown>{postMeta.body}</ReactMarkdown>
        <Link to="/blogs">go back</Link>
      </div>
    </>
  );
};

export default DetailsBlog;
