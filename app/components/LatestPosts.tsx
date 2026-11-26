import type { PostMeta } from "~/types";
import { Link } from "react-router";

type LatestPosts = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestPosts) => {
  const sortedPosts = [...posts].sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latest = sortedPosts.slice(0, limit);

  return (
    <section className="latest-p-container">
      <h2>✍ latest blogs</h2>
      <div className="latest-p-grid">
        {latest.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            <span>{new Date(post.date).toDateString()}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
