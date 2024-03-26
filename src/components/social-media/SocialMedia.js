import React from "react";
import SocialMediaCard from "./SocialMediaCard";
import socialMediaContent from "../../utils/socialMediaUtils";

const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center gap-3 m-4">
      {socialMediaContent.map((data) => (
        <SocialMediaCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default SocialMedia;
