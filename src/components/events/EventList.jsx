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
          <Carousel.Caption className="event-details-container">
            <div className="event-details-head">
              <h3 className="event-title">{event.title}</h3>
            </div>
            <div className="event-details-body">
              <ul>
                {event.details.map((detail, detailIdx) => (
                  <li className="event-detail-text golden-text" key={detailIdx}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="event-details-foot">
              <div className="venu">
                <p className="event-footer-data">{event.venue}</p>
                <h5 className="event-footer-title">Venue</h5>
              </div>
              <div className="coordinator">
                <p className="event-footer-data">
                  {event.coordinators.join(", ")}
                </p>
                <div className="event-footer-title">Coordinators</div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventList;
