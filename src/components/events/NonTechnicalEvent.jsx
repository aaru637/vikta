import React from "react";
import EventList from "./EventList";
import nonTechnicalEventData from "../../utils/eventsUtils";

const NonTechnicalEvent = () => {
  return (
    <div className="events-container">
      <h1 className="golden-text">Non Technical Events</h1>
      <EventList events={nonTechnicalEventData} />
    </div>
  );
};

export default NonTechnicalEvent;
