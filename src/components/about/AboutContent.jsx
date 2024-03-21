import { about } from "../../utils/aboutUtils";
import "../about/about.css";

const AboutContent = () => {
  console.log(about);
  return (
    <div className="about-content-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-content-text gradient-text">{about}</p>
    </div>
  );
};

export default AboutContent;
