import React from "react";
import { SocialLinksType } from "./Footer";

const SocialLink = ({ data }: { data: SocialLinksType }) => {
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
