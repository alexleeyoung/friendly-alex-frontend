const ContactPage = () => {
  return (
    <>
      <div className="container-contact">
        <form action="https://formspree.io/f/mjywzavk" method="post">
          <h2>contact me</h2>
          <div className="contact-box">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="contact-box">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="contact-box">
            <label htmlFor="subject">subject</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="contact-box">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" />
          </div>
          <button className="send-message">send message</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
