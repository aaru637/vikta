import React from "react";
import EventList from "./EventList";
import technicalEventData from "../../utils/eventsUtils";

const TechnicalEvent = () => {
  return (
    <div className="events-container">
      <h1 className="golden-text">Technical Events</h1>
      <EventList events={technicalEventData} />
    </div>
  );
};

export default TechnicalEvent;
