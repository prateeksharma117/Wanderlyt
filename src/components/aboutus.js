import "./aboutus.css";
import { aboutData } from "./aboutdata";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Wanderlyt: Traversing Horizons Since 2011</h1>

      {aboutData.map((item, index) => {
        return (
          <div className="about-section" key={index}>
            <div className="about-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="about-img">
              <img src={item.url} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;
