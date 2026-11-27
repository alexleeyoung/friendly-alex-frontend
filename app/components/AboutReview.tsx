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
            Hi, I'm Alex, a web developer and the founder of Alex Web Studio. I
            specialize in creating modern, responsive, and high-quality
            websites, handcrafted with care and attention to detail — never
            relying on AI-generated code. With 4 years of programming
            experience, I have a strong foundation in web development...
          </p>
          <Link to="/about">Read more </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutReview;
