type HeroProps = {
  name?: string;
  text?: string;
};

import { Link } from "react-router";

const Hero: React.FC<HeroProps> = ({
  name = "Alex",
  text = "I build professional websites, teach you how everything works, and bring your ideas to life with high-quality results at affordable prices.",
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
