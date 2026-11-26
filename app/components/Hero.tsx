type HeroProps = {
  name?: string;
  text?: string;
};

import { Link } from "react-router";

const Hero: React.FC<HeroProps> = ({
  name = "Alex",
  text = "i help people to make thier website and teach them very well",
}) => {
  return (
    <>
      <div className="hero">
        <h2>🚀 hello i am {name}</h2>
        <p>{text}</p>
        <div className="buttons">
          <Link to="/projects">view projects</Link>
          <Link to="/contact">contact me</Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
