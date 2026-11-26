import { Link } from "react-router";

const AboutReview = () => {
  return (
    <div className="about-container about-review">
      <div className="about-box">
        <div className="image">
          <img src="/images/profile.jpg" alt="no-image" />
        </div>
        <div className="box-text">
          <h2>hey,i'm Alex </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cumque consequuntur delectus, debitis voluptate suscipit voluptas
            quidem nulla, facilis officia voluptates ratione laudantium
            accusamus vero nisi amet blanditiis maiores eaque.
          </p>
          <Link to="/about">go to About</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutReview;
