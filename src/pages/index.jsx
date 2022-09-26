import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import { COLORS } from "../utils/themes/constants";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";

import VanillaTilt from "vanilla-tilt";
import Seo from "../assets/components/seo";

import emailjs from "@emailjs/browser";

const Index = () => {
  const theme = useTheme();
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
            <Grid item container justifyContent="center" textAlign="center">
              <Grid item>
                <StaticImage
                  src="../assets/images/Belgica.png"
                  alt="Bandera belgica"
                  placeholder="none"
                  width={70}
                  imgStyle={{
                    maxHeight: 70,
                    maxWidth: 70,
                    objectFit: "contain",
                    width: "100%",
                  }}
                />

                <Typography variant="subtitle1" color="primary">
                  PAÍS INVITADO
                </Typography>
              </Grid>
              <Grid item display={{ xs: "none", sm: "flex" }}>
                <Box
                  sx={{
                    content: '""',
                    width: 2,
                    height: "100%",
                    backgroundColor: theme.palette.primary.main,
                    marginX: 2,
                  }}
                ></Box>
              </Grid>
              <Grid item>
                <StaticImage
                  src="../assets/images/Baja Cal.png"
                  alt="Bandera belgica"
                  placeholder="none"
                  width={70}
                  imgStyle={{
                    maxHeight: 70,
                    maxWidth: 70,
                    objectFit: "contain",
                    width: "100%",
                  }}
                />

                <Typography variant="subtitle1" color="primary">
                  ESTADO INVITADO
                </Typography>
              </Grid>
            </Grid>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2Fconvocatoria_compressed.pdf?alt=media&token=5085884e-fe80-479d-9cc4-db395ecbf562"
              target="_blank"
              rel="noopener noreferer"
            >
              <Typography
                color="primary"
                style={{ textDecoration: "underline" }}
              >
                Consulta la convocatoria
              </Typography>
            </a>
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
            <Link to="status" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Estado de registro</Button>
            </Link>
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
            <a href="https://tabasco.gob.mx/turismo">
              <Typography variant="caption" color="GrayText">
                Secretaría de Turismo del estado de Tabasco
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
