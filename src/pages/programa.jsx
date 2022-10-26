import {
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Fest from "../assets/components/Fest";
import Seo from "../assets/components/seo";

const Tours = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  const buttons = [
    {
      name: "16 de noviembre",
      image: "https://i.ibb.co/hV342zD/programa-festival-16.png",
    },
    {
      name: "17 de noviembre",
      image: "https://i.ibb.co/CMYTchT/programa-festival-17.png",
    },
    {
      name: "18 de noviembre",
      image: "https://i.ibb.co/dkPXy4k/programa-festival-18.png",
    },
    {
      name: "19 de noviembre",
      image: "https://i.ibb.co/HT4gxbn/programa-festival-19.png",
    },
    {
      name: "20 de noviembre",
      image: "https://i.ibb.co/y5QBWdN/programa-festival-20.png",
    },
  ];

  const exposiciones = [
    {
      title: "Explora Tabasco",
      text: "Conoce todas las maravillas que Tabasco te ofrece a través de sus 7 Grandes Rutas. En esta área turística encuentra recorridos, exposiciones y tours y todo lo que te ofrecen las agencias de viaje y hoteles de Tabasco.",
      image: "https://i.ibb.co/Tvmtc3Q/Chocolateros.png",
    },
    {
      title: "Sabor a Tabasco",
      text: "Tabasco a través de su gastronomía. Disfruta de la cocina autóctona de las culturas Yokot’an, Zoque, Olmeca y Maya a través de sus cocineras tradicionales y sus platillos prehispánicos hechos en cocina de leña. Además de restaurantes y espectáculos musicales.",
      image: "https://i.ibb.co/wdzkjYW/Experiencia-Sensorial.png",
    },
    {
      title: "Experencia Sensorial",
      text: "Disfruta de un espectáculo de imagen, luces y sonido en una experiencia sensorial, a través de un viaje al mundo del cacao del Tabasco prehispánico, conoce los procesos y cómo surgió la bebida ancestral.",
      image: "https://i.ibb.co/xg420m3/Explora-Tabasco.png",
    },
    {
      title: "Chocolateros",
      text: "El cacao y chocolate de Tabasco presentado en una sala de exhibición donde podras encontrar mas de 120 expositores de cacao y chocolate así como los diferentes productos y servicios turísticos que el Estado ofrece.",
      image: "https://i.ibb.co/vHsH7px/IFAT.png",
    },
    {
      title: "Zona DIF",
      text: "La aventura y la diversión también es para los niños, lleva a tus pequeños a este espacio dedicado a los juegos para el desarrollo de la niñez y las actividades inclusivas que ayudan a la integración social infantil y actividades específicas para conocer la historia e importancia del cacao y el chocolate.",
      image: "https://i.ibb.co/R6Ps04Y/Sabor-a-tabasco.png",
    },
    {
      title: "IFAT",
      text: "Conoce todo lo que manos tabasqueñas son capaces de hacer con materiales de la región y disfruta de todos los productos tabasqueños en este espacio dedicado para la promoción de los artesanos del Estado.",
      image: "https://i.ibb.co/ygmLvRf/Sembrando-Vida.png",
    },
    {
      title: "Sembrando Vida",
      text: "Espacio destinado para exposición de productos del Programa Sembrando Vida, de los productores tabasqueños en el tema de agroturismo",
      image: "https://i.ibb.co/HT9VtLt/Zona-DIF.png",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [buttonSelected, setButtonSelected] = useState(buttons[0]);

  const handleShowFest = (button) => {
    setLoading(true);
    setButtonSelected(button);
    setTimeout(() => setLoading(false), 1000);
  };

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
          fontSize={{ xs: 28, md: 48 }}
          style={{
            position: "absolute",
            top: 10,
            zIndex: 99,
            color: "#6C3F37",
            textAlign: "center",
            width: "100%",
          }}
        >
          PROGRAMA
        </Typography>
      </div>
      <Grid container justifyContent="center" p={8} spacing={6}>
        <Grid item container maxWidth="lg">
          <ButtonGroup
            orientation={matches ? "horizontal" : "vertical"}
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            {buttons.map((button, key) => (
              <Button
                key={key}
                fullWidth
                style={{
                  borderRadius: 0,
                  borderColor: "transparent",
                  color:
                    button.name === buttonSelected?.name ? "white" : "#707170",
                  backgroundColor:
                    button.name === buttonSelected?.name
                      ? "#fe6b00"
                      : "#f5f5f4",
                }}
                onClick={() => handleShowFest(button)}
              >
                {button.name}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
        <Grid item container maxWidth="lg">
          {loading ? (
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress size={50} color="primary" />
              </div>
            </Grid>
          ) : (
            <img src={buttonSelected.image} width="100%" alt="Image 1" />
          )}
        </Grid>
        <Grid item container maxWidth="lg" spacing={6}>
          <Grid item xs={12}>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              EXPOSICIONES PERMANENTES
            </Typography>
          </Grid>
          {exposiciones.map((exposicion, key) => (
            <Grid item container xs={12}>
              <Grid item xs={2}>
                <img
                  src={exposicion.image}
                  width="100%"
                  style={{ maxWidth: 120 }}
                  alt="Image 1"
                />
              </Grid>
              <Grid item container direction="column" xs={10} spacing={2}>
                <Grid item>
                  <Typography fontSize={20} color="#6C3F37">
                    {exposicion.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>{exposicion.text}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tours;
