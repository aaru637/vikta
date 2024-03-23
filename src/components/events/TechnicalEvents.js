import React, { useEffect, useRef, useState } from "react";
import { technical, technicalEventDetails } from "../../utils/eventsUtils";
import { useSpring, animated } from "react-spring";
import EventCard from "./EventCard";

const LazyLoadedTechnicalCard = ({ value, index }) => {
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
    <animated.div
      ref={ref}
      style={animationProps}
      className={" flex flex-col items-center"}
    >
      <EventCard key={value.id} value={value} index={index} />
    </animated.div>
  );
};

const TechnicalEvents = () => {
  return (
    <div id="events" className="p-3">
      <p className="text-center text-white event-title">{technical}</p>
      <div className="flex flex-col w-full items-center mx-auto gap-5">
        {technicalEventDetails.map((value, index) => (
          <LazyLoadedTechnicalCard value={value} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalEvents;
