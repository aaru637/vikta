import React, { useState } from "react";
import eventData from "../../utils/aboutUtils";
import Lottie from "react-lottie";

const AboutEvent = () => {
  const [data] = useState(eventData);

  return (
    <div className="about-event-container">
      <div className="about-events">
        {data.map((d, index) => (
          <div className="about-events-content" key={index}>
            <div className="images">
              <Lottie options={d.imageURL} />
            </div>
            <p>{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEvent;
