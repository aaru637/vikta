import React from "react";
import {
  gcelogo,
  assoclogo,
  college1,
  college2,
  department,
  association1,
  association2,
  vikta,
  sympo,
  sympoDate,
  secretary,
  secretaryNames,
  rain,
  hello,
  collegeWebsite,
  departmentWebsite,
} from "../../utils/HomeUtils";
import "./home.css";
import Lottie from "react-lottie";

const Home = () => {
  const navigateToCollege = (page) => {
    return window.open(page);
  };
  return (
    <div
      id="/"
      className="pt-[80px] bg-cover flex sm:gap-10 gap-3 flex-col items-center font-bold home bg-no-repeat bg-center"
    >
      {/* Rain Animation */}
      <div className="w-fit h-min z-0 absolute pointer-events-none">
        <Lottie
          options={LottieAnimation(rain)}
          isClickToPauseDisabled={true}
          style={{ cursor: "auto" }}
        />
      </div>

      {/* College Name */}
      <div className="w-full text-white text-lg flex sm:flex-row flex-col items-center justify-evenly sm:gap-8 gap-2 mt-7">
        <img
          src={gcelogo}
          alt="gce logo"
          className="w-16 h-16 rounded-full sm:w-[6rem] sm:h-[6rem] cursor-pointer"
          onClick={() => {
            navigateToCollege(collegeWebsite);
          }}
        />
        <div className="flex flex-col items-center self-center college">
          <p className="font-patua sm:text-2xl">{college1}</p>
          <p className="font-patua sm:text-2xl">{college2}</p>
        </div>
        <img
          src={assoclogo}
          alt="assoc logo"
          className="w-16 h-16 rounded-full sm:w-[6rem] sm:h-[6rem] cursor-pointer"
          onClick={() => {
            navigateToCollege(departmentWebsite);
          }}
        />
      </div>

      {/* Department Name */}
      <p className="font-exo sm:text-3xl text-lg department">{department}</p>

      {/* Association */}
      <div className="flex flex-col items-center association p-3">
        <p className="font-oswald sm:text-3xl text-sm">{association1}</p>
        <p className="font-oswald sm:text-3xl text-sm">{association2}</p>
      </div>

      {/* Vikta */}
      <p className="font-signika sm:text-8xl text-3xl vikta">{vikta}</p>

      {/* Sympo */}
      <p className="font-roboto sm:text-3xl sympo text-sm">{sympo}</p>

      {/* Sympo Date */}
      <p className="font-roboto sm:text-3xl sympo-date text-sm">{sympoDate}</p>

      {/* Secretary Details */}
      <div className="flex flex-row w-full justify-evenly">
        {secretary.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="font-signika sm:text-3xl secretary-name text-lg">
              {secretaryNames[index]}
            </p>
            <p className="font-exo sm:text-lg secretary text-sm">{`(${value})`}</p>
          </div>
        ))}
      </div>

      {/* Hello Animation */}
      <div className="w-32 h-24">
        <Lottie
          options={LottieAnimation(hello)}
          isClickToPauseDisabled={true}
          style={{ cursor: "auto" }}
        />
      </div>
    </div>
  );
};
const LottieAnimation = (animationData) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return defaultOptions;
};
export default Home;
