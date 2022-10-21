import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
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
          FESTIVAL DEL CHOCOLATE TABASCO
        </Typography>
      </div>
      <Grid container justifyContent="center" p={8} spacing={6}>
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
              ¡EL FESTIVAL DEL SABOR!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          py={{ xs: 6, md: 12 }}
          px={{ xs: 4, md: 12 }}
          rowSpacing={4}
        >
          <Grid item xs={12} md={7} pr={{ md: 6 }}>
            <Typography
              variant="body2"
              color="GrayText"
              textAlign="justify"
              lineHeight={1.5}
              fontWeight="500"
            >
              {"El origen del cacao nace en Tabasco con los olmecas, cultura que dio vida al chocolate, y que con honor, ha sido orgullo para
              muchas generaciones. El cacao fue considerado para los Olmecas
              alimento, medicina y formó parte de la moneda de cambio. Siendo el
              grano quién impulsará al territorio de mesoamérica a expandir su
              única fruta, convirtiéndola en historia, pasión y sabor. \n\n
              Esta pasión dio origen, en el año 2010, al primer Festival del
              Chocolate como un homenaje a nuestra gastronomía y aporte cultural
              al mundo."}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <StaticImage
              src="../assets/images/historia.jpg"
              alt="Logo"
              placeholder="none"
              width={500}
              imgStyle={{
                maxWidth: 500,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tours;
