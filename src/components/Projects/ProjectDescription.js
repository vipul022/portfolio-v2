import React from "react";
import { Grid } from "@material-ui/core";

const ProjectDescription = ({ description, currentWebsite }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <p className="text-secondary">{description}</p>
        {/* <p className="text-secondary">{description}</p> */}
        {currentWebsite ? (
          <p className="text-secondary">
            Click
            <a href={currentWebsite} target="_blank" className="btn-text">
              here
            </a>
            to view the old website.
          </p>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectDescription;
