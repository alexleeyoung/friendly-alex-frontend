import type { Route } from "./+types/index";
import type { PostMeta, StrapiPost, StrapiResponse } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import PostCard from "../../components/PostCard";
import PostFilter from "~/components/PostFilter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`,
  );
  if (!res) throw new Error("there is an errror");

  const json: StrapiResponse<StrapiPost> = await res.json();
  const posts = json.data.map((item) => ({
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

  return { posts };
}

const BlogsPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const filterdPost = posts.filter((post) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      post.title.toLocaleLowerCase().includes(query) ||
      post.excerpt.toLocaleLowerCase().includes(query)
    );
  });

  const postPerPage = 2;

  const totalPages = Math.ceil(filterdPost.length / postPerPage);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = filterdPost.slice(indexOfFirst, indexOfLast);

  ///// filters

  return (
    <div className="container-blogs">
      <h2>blogs</h2>
      <PostFilter searchQuery={searchQuery} onSeachChange={setSearchQuery} />

      {currentPosts.length === 0 ? (
        <p className="no-post-match">
          there is no post mathces <span>'{searchQuery}'</span>
        </p>
      ) : (
        currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
      {}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onBtnClick={(post) => setCurrentPage(post)}
        />
      )}
    </div>
  );
};

export default BlogsPage;
