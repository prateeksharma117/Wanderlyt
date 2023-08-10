import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Wanderlyt</h1>
          <p>choose your favorite destination.</p>
        </div>
        <div>
          <a href="/">
            <AiFillFacebook size={40} />
          </a>
          <a href="/">
            <AiFillInstagram size={40} />
          </a>
          <a href="/">
            <AiFillLinkedin size={40} />
          </a>
          <a href="/">
            <AiFillRedditCircle size={40} />
          </a>
          <a href="/">
            <AiFillTwitterCircle size={40} />
          </a>
        </div>
      </div>
      <div className="bottom">

        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All versions</a>
        </div>

        <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>

        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        </div>

        <div>
            <h4>Others</h4>
            <a href="/">Terms & Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
