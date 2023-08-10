import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>send a message to us</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea rows="4" placeholder="Message">
        </textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
