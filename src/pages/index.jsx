import { Button, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import { COLORS } from "../utils/themes/constants";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

import VanillaTilt from "vanilla-tilt";
import Seo from "../assets/components/seo";

const Index = () => {
  const options = {
    speed: 500,
    max: 15,
    "full-page-listening": true,
  };

  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <>
      <Seo />
      <Grid
        container
        height="100vh"
        style={{ backgroundColor: COLORS.white }}
        paddingY={1}
      >
        <Grid item container xs={3} justifyContent="flex-end">
          <Grid item xs={6} width="100%" />
          <Grid item container xs={6} justifyContent="right">
            <img
              src={
                require("../assets/images/elementosparalanding/Cacao 01.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 70,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 04.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
          <Grid item xs={6} width="100%" />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <img
              src={require("../assets/images/icon.png").default}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 420,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
          <Grid item>
            <Typography textAlign="center" variant="h3" color="primary.dark">
              16 al 20 de noviembre
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} justifyContent="flex-end">
          <Grid item container xs={6}>
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 02.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 130,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>

          <Grid item xs={6} width="100%" />
          <Grid item xs={6} width="100%" />
          <Grid item container xs={6} justifyContent="right">
            <img
              src={
                require("../assets/images/elementosparalanding/Canela 02.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 110,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
        </Grid>

        <Grid item container xs={3} justifyContent="flex-start">
          <Grid item xs={6} width="100%" />
          <Grid item container xs={6} justifyContent="right">
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 08.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
          <Grid item container xs={6}>
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 01.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>

          <Grid item xs={6} width="100%" />

          <Grid item xs={6} width="100%" />
          <Grid item container xs={6} justifyContent="right">
            <img
              src={
                require("../assets/images/elementosparalanding/Canela 02.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 110,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={6}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <div ref={tilt}>
              <img
                src={require("../assets/images/cacao.png").default}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: 600,
                  objectFit: "contain",
                }}
                alt="logo chocolate"
                loading="lazy"
              />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={3} justifyContent="flex-start">
          <Grid item container xs={6}>
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 07.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>

          <Grid item xs={6} width="100%" />

          <Grid item xs={6} width="100%" />
          <Grid item container xs={6} justifyContent="right">
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 03.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>

          <Grid item container xs={6}>
            <img
              src={
                require("../assets/images/elementosparalanding/Chocolate 04.png")
                  .default
              }
              style={{
                width: "100%",
                height: "100%",
                maxWidth: 150,
                objectFit: "contain",
              }}
              alt="logo chocolate"
              loading="lazy"
            />
          </Grid>

          <Grid item xs={6} width="100%" />
        </Grid>
        <Grid item container direction="row" paddingX={4}>
          <Grid item container spacing={2} xs={4} alignItems="flex-end">
            <Grid item>
              <a href="https://www.facebook.com/FestivaldelChocolate">
                <FacebookOutlined color="disabled" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/festivaldelchocolate/">
                <Instagram color="disabled" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://twitter.com/FestivalChoco">
                <Twitter color="disabled" />
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={8}
            justifyContent="right"
            alignItems="flex-end"
          >
            <Typography variant="caption" color="GrayText">
              Secretaría de Turismo del estado de Tabasco
            </Typography>
          </Grid>
        </Grid>

        {/*   <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <Link to="home" style={{ textDecoration: "none" }}>
            <Button variant="contained">Registro de expositor</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="outlined">Estado de registro</Button>
        </Grid>
      </Grid> */}
      </Grid>
    </>
  );
};

export default Index;
