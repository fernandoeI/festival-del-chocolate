import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Seo from "../assets/components/seo";

import Navbar from "../assets/components/Navbar";

const Tours = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0 !important", margin: "0 !important" }}
    >
      <Seo />
      <Navbar />

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
          TOURS
        </Typography>
      </div>
      <img
        src={require("../assets/images/Experiencias Memorables.jpg").default}
        width="100%"
        alt="Image 1"
      />
      <Grid container justifyContent="center" p={8} spacing={6}>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              NUESTRAS EXPERIENCIAS
            </Typography>
          </Grid>
          <Grid item maxWidth="md">
            <Typography color="#6C3F37" fontSize={22} textAlign="justify">
              A través de nuestras experiencias memorables, podrás conocer,
              vivir, sorprenderte de cada uno de nuestros destinos turísticos
              que reflejan la riqueza, color, tradición, cultura y amor a la
              tierra de su gente, que le dan alma y vida al Estado. Aquí sin
              duda tendrás una experiencia memorable
            </Typography>
          </Grid>
        </Grid>
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
            <Button variant="contained">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FCATALOGO_NUEVO%20-%20U%CC%81LTIMO_ok.pdf?alt=media&token=fede0f9a-f90e-433a-8f87-091a0698e197"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Consulta el manual de experiencias
              </a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tours;
