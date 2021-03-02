import React from "react";

const SocialLink = ({ data }) => {
  const { link, icon } = data;
  return (
    <>
      <a href={link} target="_blank">
        {icon}
      </a>
    </>
  );
};
export default SocialLink;
