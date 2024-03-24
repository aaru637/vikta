import { Card } from "flowbite-react";
import React from "react";
import ReactWhatsapp from "react-whatsapp";

const ContactCard = ({ data }) => {
  return (
    <>
      <Card className="w-[15rem] h-[25rem]">
        <div className="flex flex-col items-center pb-10">
          <img
            alt={data.name}
            height="150"
            src={data.image}
            width="150"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
            {data.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {data.postName}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              href={`tel:${data.contact}`}
            >
              {"Call"}
            </a>
            <ReactWhatsapp
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              number={data.contact}
              message="I need your Help...!"
            >
              {"Message"}
            </ReactWhatsapp>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ContactCard;
