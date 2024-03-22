import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampkeCarouselImage";

import "../events/events.css";
const EventList = (eventData) => {
  console.log(eventData.events);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="event-container"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {eventData.events.map((event, idx) => (
        <Carousel.Item key={idx}>
          <ExampleCarouselImage image={event.image} title={event.title} />
          <Carousel.Caption>
            <h3>{event.title}</h3>
            <p>Venue: {event.venue}</p>
            <p>Coordinators: {event.coordinators.join(", ")}</p>
            <ul>
              {event.details.map((detail, detailIdx) => (
                <li key={detailIdx}>{detail}</li>
              ))}
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventList;
