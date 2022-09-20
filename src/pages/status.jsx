import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Seo from "../assets/components/seo";
import { COLORS } from "../utils/themes/constants";

const Status = () => {
  return (
    <Container maxWidth="lg">
      <Seo />
      <Grid
        container
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item container spacing={2}>
          <Grid item textAlign="center">
            <StaticImage
              src="../assets/images/icon.png"
              alt="Logo"
              placeholder="none"
              width={250}
              imgStyle={{
                maxWidth: 250,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            component="form"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h3" component="h1" color="primary">
                Consulta de estado
              </Typography>
              <Typography variant="body2" marginTop={1}>
                Aquí podrás consultar el estado de tu solicitud para ser parte
                de los expositores del 11° Festival del Chocolate
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                label="RFC con homoclave"
                size="small"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                label="Folio de registro"
                size="small"
              />
            </Grid>
            <Grid item>
              <Button fullWidth variant="contained">
                Consultar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Status;
