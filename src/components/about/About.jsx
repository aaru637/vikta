import React, { useRef, useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import AboutEvent from "./AboutEvent";
import { useSpring, animated } from "react-spring";

const LazyLoadedAboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // if (ref.current) {
      //   observer.unobserve(ref.current);
      // }
    };
  }, []);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-50px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      <AboutContent />
    </animated.div>
  );
};

const LazyLoadedAboutEvent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // if (ref.current) {
      //   observer.unobserve(ref.current);
      // }
    };
  }, []);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-50px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      <AboutEvent />
    </animated.div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <LazyLoadedAboutContent />
        <LazyLoadedAboutEvent />
      </div>
    </div>
  );
};

export default About;
