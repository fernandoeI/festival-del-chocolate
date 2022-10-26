import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Seo from "../assets/components/seo";

const Tours = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0 !important", margin: "0 !important" }}
    >
      <Seo />

      <div
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/images/navbar.jpeg").default}
          width="100%"
          style={{ maxHeight: 100, objectFit: "cover" }}
          alt="Image 1"
        />
        <Typography
          fontSize={{ xs: 32, md: 48 }}
          style={{
            position: "absolute",
            top: 10,
            zIndex: 99,
            color: "#6C3F37",
            textAlign: "center",
            width: "100%",
          }}
        >
          VEN AL FESTIVAL
        </Typography>
      </div>
      <Grid container justifyContent="center" p={8} spacing={6}>
        {/*  <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          spacing={1}
        >
          <Grid item>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              RUTA DEL CACAO AL CHOCOLATE
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="#BD965A" textAlign="center">
              PROGRAMA TU TOUR
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FPORTADA_merged.pdf?alt=media&token=04adcbd1-8f11-4434-b59a-96277b479a73"
            >
              Descargar
            </Button>
          </Grid>
        </Grid> */}
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          spacing={1}
        >
          <Grid item>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              VEN A TABASCO
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="#BD965A" textAlign="center">
              PROGRAMA TU TOUR
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FCATALOGO_NUEVO%20-%20U%CC%81LTIMO_ok.pdf?alt=media&token=fede0f9a-f90e-433a-8f87-091a0698e197"
            >
              Descargar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tours;
