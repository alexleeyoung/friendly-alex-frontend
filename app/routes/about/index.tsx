const About = () => {
  return (
    <div className="about-container">
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
            experience, I have a strong foundation in web development,
            particularly in vanilla technologies like HTML, CSS, and JavaScript.
            I also work with popular frameworks and libraries such as React to
            build powerful, dynamic, and interactive web experiences. At Alex
            Web Studio, I believe every website should be unique, functional,
            and built to meet each client's needs. That's why I focus on
            delivering custom-made solutions with clean code, professional
            results, and reasonable, affordable prices. Your vision deserves
            more than a template. Let's bring it to life!
          </p>
        </div>
      </div>
      <div className="my-mission">
        <h2>any mission</h2>
        <p>
          My mission is to turn your ideas into reality and make you smile when
          you see your project come to life. I believe that everyone deserves a
          beautiful, professional website without spending a fortune. That's why
          I focus on delivering high-quality work, attention to detail, and
          affordable prices. Your satisfaction is my priority, and nothing makes
          me happier than seeing you proud of the final result!
        </p>
      </div>
      <div className="tech-use">
        <h2>tech i use</h2>
        <ul className="tech-flex">
          {[
            "responsive website",
            "web design",
            "JavaScript",
            "TypeScript",
            "React",
            "react router",
            "PHP",
            "html",
            "css",
            "laravel",
            "tanstack",
            "tailwind",
            "jquery",
            "and more",
          ].map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
