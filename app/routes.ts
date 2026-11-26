import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "routes/about/index.tsx"),
  route("contact", "routes/contact/index.tsx"),
  route("blogs", "routes/blogs/index.tsx"),
  route("projects", "routes/projects/index.tsx"),
  route("projects/:id", "routes/projects/details.tsx"),
  route("*", "routes/errors/not-found.tsx"),
  route("/blog/:slug", "routes/blogs/details.tsx"),
] satisfies RouteConfig;
