import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import { COLORS } from "../utils/themes/constants";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";

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
    <Container
      maxWidth={false}
      style={{
        height: "100vh",
        backgroundColor: COLORS.white,
      }}
    >
      <Seo />
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        spacing={2}
        height="100%"
      >
        <Grid item xs container>
          <Grid item container xs={3} justifyContent="flex-end">
            <Grid item xs={6} width="100%" />
            <Grid item container xs={6} justifyContent="right">
              <StaticImage
                src="../assets/images/elementosparalanding/Cacao 01.png"
                alt="Semilla de cacao"
                placeholder="none"
                width={90}
                imgStyle={{
                  maxHeight: 90,
                  maxWidth: 90,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 04.png"
                alt="Trozo de chocolate"
                placeholder="none"
                width={150}
                imgStyle={{
                  maxHeight: 120,
                  maxWidth: 150,
                  objectFit: "contain",
                  width: "100%",
                }}
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
              <StaticImage
                src="../assets/images/icon.png"
                alt="Logo"
                placeholder="none"
                width={400}
                imgStyle={{
                  maxHeight: 200,
                  maxWidth: 400,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <Typography textAlign="center" variant="h4" color="primary.dark">
                16 al 20 de noviembre
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={3} justifyContent="flex-end">
            <Grid item container xs={6}>
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 02.png"
                alt="Trozo de cacao"
                placeholder="none"
                width={110}
                imgStyle={{
                  maxHeight: 110,
                  maxWidth: 110,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item xs={6} width="100%" />
            <Grid item xs={6} width="100%" />
            <Grid item container xs={6} justifyContent="right">
              <StaticImage
                src="../assets/images/elementosparalanding/Canela 02.png"
                alt="Canela"
                placeholder="none"
                width={110}
                imgStyle={{
                  maxHeight: 110,
                  maxWidth: 110,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Grid item container xs={3} justifyContent="flex-start">
            <Grid item xs={6} width="100%" />
            <Grid item container xs={6} justifyContent="right">
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 08.png"
                alt="Trozo de chocolate"
                placeholder="none"
                width={130}
                imgStyle={{
                  maxHeight: 90,
                  maxWidth: 130,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item container xs={6}>
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 01.png"
                alt="Trozo de chocolate"
                placeholder="none"
                width={130}
                imgStyle={{
                  maxHeight: 130,
                  maxWidth: 130,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item xs={6} width="100%" />

            <Grid item xs={6} width="100%" />
            <Grid item container xs={6} justifyContent="right">
              <StaticImage
                src="../assets/images/elementosparalanding/Canela 02.png"
                alt="Canela"
                placeholder="none"
                width={110}
                imgStyle={{
                  maxHeight: 90,
                  maxWidth: 110,
                  objectFit: "contain",
                  width: "100%",
                }}
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
                <StaticImage
                  src="../assets/images/cacao.png"
                  alt="Cacao"
                  placeholder="none"
                  width={560}
                  imgStyle={{
                    maxHeight: 560,
                    maxWidth: 560,
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid item container xs={3} justifyContent="flex-start">
            <Grid item container xs={6}>
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 07.png"
                alt="Trozo de chocolate"
                placeholder="none"
                width={120}
                imgStyle={{
                  maxHeight: 120,
                  maxWidth: 120,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item xs={6} width="100%" />

            <Grid item xs={6} width="100%" />
            <Grid item container xs={6} justifyContent="right">
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 03.png"
                alt="Trozo de chocolate"
                placeholder="none"
                width={120}
                imgStyle={{
                  maxHeight: 90,
                  maxWidth: 120,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item container xs={6}>
              <StaticImage
                src="../assets/images/elementosparalanding/Chocolate 04.png"
                alt="Chocolate"
                placeholder="none"
                width={130}
                imgStyle={{
                  maxHeight: 130,
                  maxWidth: 130,
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item xs={6} width="100%" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          paddingTop={-16}
          spacing={2}
          justifyContent="center"
        >
          <Grid item>
            <Link to="request" style={{ textDecoration: "none" }}>
              <Button variant="contained">Registro de expositor</Button>
            </Link>
          </Grid>
          <Grid item>
            <Button variant="outlined">Estado de registro</Button>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid
            item
            container
            spacing={2}
            xs={12}
            sm={6}
            justifyContent={{ xs: "center", sm: "left" }}
          >
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

          <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "right" }}>
            <Typography variant="caption" color="GrayText">
              Secretaría de Turismo del estado de Tabasco
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
