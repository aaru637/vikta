import React, { useEffect, useRef, useState } from "react";
import {
  nonTechnical,
  nonTechnicalEventDetails,
} from "../../utils/eventsUtils";
import { useSpring, animated } from "react-spring";
import EventCard from "./EventCard";

const LazyLoadedNonTechnicalCard = ({ value, index }) => {
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

const NonTechnicalEvents = () => {
  return (
    <div className="px-3 py-16">
      <p className="text-center text-white event-title">{nonTechnical}</p>
      <div className="flex flex-col w-full items-center gap-5">
        {nonTechnicalEventDetails.map((value, index) => (
          <LazyLoadedNonTechnicalCard value={value} index={index} />
        ))}
      </div>
    </div>
  );
};

export default NonTechnicalEvents;
