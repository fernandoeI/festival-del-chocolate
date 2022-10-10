import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import Seo from "../assets/components/seo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { navigate } from "gatsby";

const chocolate = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0 !important", margin: "0 !important" }}
    >
      <Seo />
      <Grid container direction="column">
        <Grid item width="100%">
          <Splide
            aria-label="My Favorite Images"
            options={{ autoplay: true, speed: 1, type: "loop", perPage: 1 }}
          >
            <SplideSlide>
              <img
                src={require("../assets/images/BANNER1728x611px.png").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={require("../assets/images/catas.png").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={require("../assets/images/cena.png").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={require("../assets/images/convocatoria.png").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
          </Splide>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container direction="column" py={6} px={4}>
          <Grid
            item
            container
            justifyContent="center"
            spacing={{ xs: 3, md: 0 }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="body" fontSize={18} color="GrayText">
                Eres cacaotero o chocolatero, participa como expositor y forma
                parte de la experiencia memorable en el 11º Festival del
                Chocolate Tabasco 2022.
              </Typography>
            </Grid>

            <Grid item xs={4} md={2}>
              <button
                style={{
                  backgroundColor: "#FF6A00",
                  color: "white",
                  borderRadius: 5,
                  borderColor: "#6C3F37",
                  fontSize: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
                onClick={() => navigate("/request")}
              >
                REGISTRO DE EXPOSITOR
              </button>
            </Grid>
            <Grid item xs={4} md={2}>
              <button
                style={{
                  backgroundColor: "#FF6A00",
                  color: "white",
                  borderRadius: 5,
                  borderColor: "#6C3F37",
                  fontSize: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
                onClick={() => navigate("/status")}
              >
                ESTADO DE REGISTRO
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container py={{ xs: 6, md: 12 }} px={4} rowSpacing={4}>
          <Grid item xs={12} md={6} pr={4}>
            <Typography variant="h6" pb={4}>
              FESTIVAL DEL CHOCOLATE
            </Typography>
            <Typography variant="body2" color="GrayText">
              El Festival del Chocolate Tabasco se presenta por primera vez en
              el año 2010 como una alianza estratégica de la iniciativa privada,
              prestadores de servicios y el Gobierno de Tabasco bajo el lema
              “Origen y Sabor” con el objetivo de promover y difundir la
              tradición cacaotera del Estado, su gastronomía y atraer el turismo
              nacional e internacional, llevándose a cabo, en esa ocación en el
              Centro de Convenciones Tabasco 2000.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Cx8iZyoXcZI"
                title="11 Festival del Chocolate Tabasco | 11 años de herencia y trascendencia"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" py={6}>
          <Grid item xs={12} pb={6}>
            <Typography variant="h1" color="#6C3F37" textAlign="center">
              DIMENSIONES
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={require("../assets/images/Productores.png").default}
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" textAlign="center">
              PRODUCTORES
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Mejores prácticas</li>
                <li>Incremento de producción.</li>
                <li>Nuevas técnicas.</li>
                <li>Networking </li>
                <li>Producción Orgánica.</li>
                <li>
                  Recuperación del concepto de Selva Domesticada (Agrofloresta).
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={require("../assets/images/Postproductores.png").default}
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" textAlign="center">
              POST-PRODUCTORES
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Mejores prácticas </li>
                <li>Cacao Grijalva.</li>
                <li>Nuevas técnicas y tecnologías.</li>
                <li>Procesos orgánicos.</li>
                <li>Networking.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={require("../assets/images/Chocolateros.png").default}
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" textAlign="center">
              CHOCOLATEROS
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Innovación</li>
                <li>Cacao Grijalva.</li>
                <li>Valor de la marca</li>
                <li>Esencia Tabasco.</li>
                <li>Nuevas técnicas y tecnología.</li>
                <li>Networking.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={require("../assets/images/Gastronomia.png").default}
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" textAlign="center">
              GASTRONOMÍA
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Nuevos platillos.</li>
                <li>Chef innovadores con reconocimientos.</li>
                <li>
                  Sede de la innovación gastronómica con cacao y chocolate.
                </li>
                <li>Escuelas de gastronomía innovadoras.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={require("../assets/images/Turismo.png").default}
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" textAlign="center">
              TURISMO
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>
                  Principal destino turístico del cacao y el chocolate del
                  mundo.
                </li>
                <li>
                  Visitas y experiencias en campo y las haciendas que relacionen
                  a los cinco sentidos en la Ruta del Cacaco al Chocolate.
                </li>
                <li>Networking Producción Orgánica.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1" color="#6C3F37" textAlign="center">
              ACTIVIDADES
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h1" color="#6C3F37" textAlign="center">
              HERENCIA Y TRASCENDENCIA
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/OLGPD6zBPpI"
                title="11 Festival del Chocolate Tabasco | Historia del Cacao"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default chocolate;
