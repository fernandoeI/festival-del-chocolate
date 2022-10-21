import React from "react";
import { Grid, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const Navbar = () => {
  return (
    <Grid
      container
      style={{ backgroundColor: "#6C3F37" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item container pl={8}>
        <Grid item container xs={1} py={2}>
          <StaticImage
            onClick={() => navigate("/")}
            src="../images/logoNegativo.png"
            alt="Logo"
            placeholder="none"
            width={120}
            imgStyle={{
              maxWidth: 120,
              objectFit: "contain",
              width: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          container
          xs={9}
          spacing={1}
          justifyContent="space-evenly"
          alignItems="center"
          px={2}
        >
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              | Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              | Festival del Chocolate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              | Programa
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              | Historia del Chocolate
            </Typography>
          </Grid>
          {/*    <Grid item>
            <Typography  color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/status")}>|    Ven al Festival</Typography>
          </Grid> */}
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              | Expositores
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography  color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/status")}>|    Redes y Prensa</Typography>
          </Grid> */}
        </Grid>
        <Grid
          item
          container
          xs={2}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <StaticImage
              onClick={() => navigate("/")}
              src="../images/ícono facebook.png"
              alt="Logo"
              placeholder="none"
              width={30}
              imgStyle={{
                maxWidth: 30,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <StaticImage
              onClick={() => navigate("/")}
              src="../images/ícono instagram.png"
              alt="Logo"
              placeholder="none"
              width={30}
              imgStyle={{
                maxWidth: 30,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <StaticImage
              onClick={() => navigate("/")}
              src="../images/ícono tiktok.png"
              alt="Logo"
              placeholder="none"
              width={30}
              imgStyle={{
                maxWidth: 30,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <StaticImage
              onClick={() => navigate("/")}
              src="../images/ícono twitter.png"
              alt="Logo"
              placeholder="none"
              width={30}
              imgStyle={{
                maxWidth: 30,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
