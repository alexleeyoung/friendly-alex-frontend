import { Link } from "react-router";
import type { PostMeta } from "~/types";

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <img src={post.image} alt={post.image} />
      <p>{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`}>read more</Link>
    </article>
  );
};

export default PostCard;
