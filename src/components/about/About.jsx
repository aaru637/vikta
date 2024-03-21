import AboutContent from "./AboutContent";
import "../about/about.css";
import AboutEvent from "./AboutEvent";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <AboutContent />
        <AboutEvent />
      </div>
    </div>
  );
};

export default About;
