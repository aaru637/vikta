import { List } from "flowbite-react";
import React from "react";

const EventCard = ({ value, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } flex-col bg-white border-none rounded-xl gap-4 lg:w-[70%]`}
    >
      <img
        src={value.image}
        alt="Mr Engineer"
        className="sm:w-[50%] w-[100%] h-[20rem] sm:h-[28rem] rounded-xl"
      />
      <div className="flex flex-col p-3 items-start justify-between flex-nowrap">
        <div>
          <p className="text-3xl text-black font-poppins font-bold">
            {value.name}
          </p>
          <List className="p-2 text-black font-semibold font-exo_2 text-start">
            {value.about.map((value, index) => (
              <List.Item key={index} className="p-2 text-md">
                {value}
              </List.Item>
            ))}
          </List>
        </div>
        <p className="font-bold text-2xl font-roboto">
          Venue :{" "}
          <span className="font-semibold text-gray-500 font-patua text-2xl">
            {value.venue}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EventCard;
