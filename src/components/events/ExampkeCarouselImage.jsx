import React from "react";

const ExampleCarouselImage = ({ image, title }) => {
  console.log(image, title);
  return (
    <div>
      <img className="background-image" src={image} alt={title} />
    </div>
  );
};

export default ExampleCarouselImage;
