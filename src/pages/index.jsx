import { Button, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { COLORS } from "../utils/themes/constants";

const index = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      style={{ backgroundColor: COLORS.white }}
    >
      <Grid item>
        <img
          src={require("../assets/images/logo.png").default}
          style={{ width: "100%", height: "100%", maxWidth: 650 }}
          alt="logo chocolate"
          loading="lazy"
        />
      </Grid>

      <Grid item>
        <img
          src={require("../assets/images/cacao.png").default}
          style={{ width: "100%", height: "100%", maxWidth: 650 }}
          alt="logo chocolate"
          loading="lazy"
        />
      </Grid>
      <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <Link to="home" style={{ textDecoration: "none" }}>
            <Button variant="contained">Registro de expositor</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="outlined">Estado de registro</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
