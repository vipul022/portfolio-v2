import React from "react";
import { Grid } from "@material-ui/core";
const Icons = ({ iconList }) => {
  const content = iconList.map((icon, index) => (
    <Grid item={true} key={index}>
      <img
        className="icon"
        src={`images/icons/${icon.toLowerCase()}.svg`}
        alt={icon}
      />
    </Grid>
  ));

  return (
    <Grid container={true} justify={"space-evenly"} spacing={2}>
      {content}
    </Grid>
  );
};

export default Icons;
