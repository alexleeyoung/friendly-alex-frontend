import { useState } from "react";
import { FaLaptopCode, FaBars, FaTimeline } from "react-icons/fa6";
import { NavLink } from "react-router";

const NavBar = () => {
  const [isOpen, setIsoOpen] = useState(false);
  return (
    <>
      <nav>
        <NavLink to="/">
          <FaLaptopCode className="laptop-logo" />
          <span>Alex Web Studio</span>
        </NavLink>
        <div className="nav-desktop">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            contact
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blogs"
          >
            blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/projects"
          >
            projects
          </NavLink>
        </div>
        <div className="nav-mobile">
          <button onClick={() => setIsoOpen(!isOpen)}>
            {isOpen ? <FaTimeline /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/**toggle navbar */}
      <div className="nav-toggle">
        {isOpen && (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              onClick={() => setIsoOpen(false)}
            >
              home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
              onClick={() => setIsoOpen(false)}
            >
              about
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
              onClick={() => setIsoOpen(false)}
            >
              contact
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blogs"
              onClick={() => setIsoOpen(false)}
            >
              blogs
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/projects"
              onClick={() => setIsoOpen(false)}
            >
              projects
            </NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
