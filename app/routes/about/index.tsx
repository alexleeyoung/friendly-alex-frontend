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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            cumque consequuntur delectus, debitis voluptate suscipit voluptas
            quidem nulla, facilis officia voluptates ratione laudantium
            accusamus vero nisi amet blanditiis maiores eaque.
          </p>
        </div>
      </div>
      <div className="my-mission">
        <h2>any mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          fugit aliquam consequuntur, optio doloribus at eaque amet consequatur
          similique, assumenda error id. Nemo, dolores illum molestiae ex
          deserunt vero praesentium!
        </p>
      </div>
      <div className="tech-use">
        <h2>tech i use</h2>
        <ul className="tech-flex">
          {[
            "JavaScript",
            "TypeScript",
            "Python",
            "PHP",
            "Ruby",
            "Java",
            "C#",
            "Go",
            "Kotlin",
            "Swift",
          ].map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
