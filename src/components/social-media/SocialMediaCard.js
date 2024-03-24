import { Card } from "flowbite-react";
import React from "react";

const SocialMediaCard = ({ data }) => {
  return (
    <Card
      className="max-w-md bg-gray-800 border-none"
      renderImage={() => (
        <img
          src={data.image}
          alt={data.title}
          className="p-2 rounded-3xl h-[18rem] object-center"
        />
      )}
    >
      <h5 className="text-3xl font-poppins font-bold tracking-tight text-white">
        {data.title}
      </h5>
      <p className="font-poppins font-semibold text-gray-300">{data.content}</p>
      <div className="mx-auto">
        <a
          href={data.link}
          target="blank"
          className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Let's Explore
        </a>
      </div>
    </Card>
  );
};

export default SocialMediaCard;
