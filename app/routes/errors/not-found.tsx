import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>page not found</h2>
      <p>sorry! the page you are looking for it does not exist</p>
      <Link to="/">go back home</Link>
    </div>
  );
};

export default NotFound;
