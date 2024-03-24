import React from "react";
import {
  click,
  information,
  link,
  note,
  online,
  rules,
  rulesTitle,
} from "../../utils/registerUtils";
import { Button, List } from "flowbite-react";
import { HiAcademicCap } from "react-icons/hi";

const Register = () => {
  return (
    <div
      className="w-[90%] md:w-[70%] border-none mx-auto bg-gray-900 shadow-inner shadow-slate-200 rounded-xl flex flex-col p-4 m-3 items-start"
      id="register"
    >
      <p className="text-yellow-300 text-xl sm:text-3xl font-patua font-bold">
        {online}
      </p>
      <p className="text-lg sm:text-xl text-green-400 font-patua font-bold">
        {rulesTitle}
      </p>
      <List className="p-2">
        {rules.map((value, index) => (
          <List.Item
            key={index}
            icon={HiAcademicCap}
            className="text-blue-600 text-md sm:text-lg font-poppins font-semibold"
          >
            {value}
          </List.Item>
        ))}
      </List>
      <p className="text-md sm:text-xl text-green-400 font-patua font-bold">
        {note}
      </p>
      <List className="p-2">
        {information.map((value, index) => (
          <List.Item
            key={index}
            icon={HiAcademicCap}
            className="text-blue-600 text-md sm:text-lg font-roboto font-semibold"
          >
            {value.title}
            <span className="text-white font-bold">&nbsp;{value.price}</span>
          </List.Item>
        ))}
      </List>
      <a href={link} target="blank" className="mx-auto">
        <Button>{click}</Button>
      </a>
    </div>
  );
};

export default Register;
