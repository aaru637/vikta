import "../events/events.css";
import EventList from "./EventList";
import technicalEventData from "../../utils/eventsUtils";

const TechnicalEvent = () => {
  return <EventList events={technicalEventData} />;
};

export default TechnicalEvent;
