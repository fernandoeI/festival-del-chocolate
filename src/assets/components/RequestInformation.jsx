import { Grid, Typography } from "@mui/material";
import React from "react";

const RequestInformation = ({ title, description }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="overline"
          color="GrayText"
          sx={{ textDecoration: "underline" }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        {typeof description === "string" ? (
          <Typography variant="body1">{description}</Typography>
        ) : (
          description
        )}
      </Grid>
    </Grid>
  );
};

export default RequestInformation;
