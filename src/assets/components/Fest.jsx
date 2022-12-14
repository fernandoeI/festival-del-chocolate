import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  image: {
    padding: 10,
    width: "100%",
    maxWidth: 300,
    [theme.breakpoints.up("md")]: {
      float: "right",
    },
  },
}));

const Fest = ({ text, image }) => {
  const classes = useStyles();
  return (
    <Grid container bgcolor="white">
      <div style={{ flex: 1, textAlign: "center" }}>
        <img src={image} alt="Image 1" className={classes.image} />
        <Typography
          sx={{
            flex: "2 0 0",
            textAlign: "justify",
            paddingRight: 5,
            paddingBottom: 10,
          }}
        >
          {text}
        </Typography>
      </div>
    </Grid>
  );
};

export default Fest;
