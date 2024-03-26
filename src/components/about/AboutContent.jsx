import { about1, about2, about3, about4 } from "../../utils/aboutUtils";
import "../about/about.css";

const AboutContent = () => {
  return (
    <div className="about-content-container">
      <h1 className="about-title" id="aboutus">
        About Us
      </h1>
      <p className="about-content-text gradient-text sm:text-xl">
        <span>{about1}</span>
        <span className="text-white">{about2}</span>
        <span>{about3}</span>
        <span className="text-white">{about2}</span>
        <span>{about4}</span>
      </p>
    </div>
  );
};

export default AboutContent;
