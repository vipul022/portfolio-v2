import React from "react";
import { Grid } from "@material-ui/core";

const HeadingTertiary = ({ heading }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 className="heading-tertiary">{heading}</h1>
      </Grid>
    </Grid>
  );
};

export default HeadingTertiary;
