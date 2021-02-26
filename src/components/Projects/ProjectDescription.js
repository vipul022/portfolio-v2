import React from "react";
import { Grid } from "@material-ui/core";

const ProjectDescription = ({ description }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <p className="text-secondary">{description}</p>
      </Grid>
    </Grid>
  );
};

export default ProjectDescription;
