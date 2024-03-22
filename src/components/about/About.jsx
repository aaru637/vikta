import React, { useRef, useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import AboutEvent from "./AboutEvent";

const LazyLoadedComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0px)" : "translateX(-50px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      {children}
    </div>
  );
};

const LazyLoadedAboutContent = React.memo(() => (
  <LazyLoadedComponent>
    <AboutContent />
  </LazyLoadedComponent>
));

const LazyLoadedAboutEvent = React.memo(() => (
  <LazyLoadedComponent>
    <AboutEvent />
  </LazyLoadedComponent>
));

const About = () => {
  return (
    <div className="about-container" id="aboutus">
      <div className="about-inner-container">
        <LazyLoadedAboutContent />
        <LazyLoadedAboutEvent />
      </div>
    </div>
  );
};

export default About;
