import React from "react";
import { Grid } from "@material-ui/core";

const ProjectDescription = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <p className="text-secondary">{children}</p>
      </Grid>
    </Grid>
  );
};

export default ProjectDescription;
