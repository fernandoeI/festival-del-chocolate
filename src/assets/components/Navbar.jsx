import React, { useState } from "react";
import { Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";
import { makeStyles } from "@mui/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const useStyles = makeStyles((theme) => ({
  image: {
    padding: 10,
    width: "100%",
    maxWidth: 300,
    [theme.breakpoints.up("md")]: {
      float: "right",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      style={{ backgroundColor: "#6C3F37" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item container pl={8}>
        <Grid item container xs={3} lg={1} py={2}>
          <Link to="/">
            <img
              src={require("../images/logoNegativo.png").default}
              width="100%"
              style={{ maxHeight: 90, objectFit: "contain" }}
              alt="Image 1"
            />
          </Link>
        </Grid>

        <Grid
          item
          container
          xs={9}
          spacing={1}
          justifyContent="space-evenly"
          alignItems="center"
          px={2}
          display={{ xs: "none", lg: "flex" }}
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
              onClick={() => navigate("/festival")}
            >
              | Festival del Chocolate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/programa")}
            >
              | Programa
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/historia")}
            >
              | Historia del Chocolate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/ven-al-festival")}
            >
              | Ven al Festival
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="#F9DC9B"
              component="span"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/status")}
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
          xs={6}
          lg={2}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <a href="https://www.facebook.com/FestivaldelChocolate">
              <img
                src={require("../images/ícono facebook.png").default}
                width="100%"
                style={{ maxHeight: 30, objectFit: "contain" }}
                alt="Image 1"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.instagram.com/festivaldelchocolate/">
              <img
                src={require("../images/ícono instagram.png").default}
                width="100%"
                style={{ maxHeight: 30, objectFit: "contain" }}
                alt="Image 1"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.tiktok.com/@festivaldelchocolatetab">
              <img
                src={require("../images/ícono tiktok.png").default}
                width="100%"
                style={{ maxHeight: 30, objectFit: "contain" }}
                alt="Image 1"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/FestivalChoco">
              <img
                src={require("../images/ícono twitter.png").default}
                width="100%"
                style={{ maxHeight: 30, objectFit: "contain" }}
                alt="Image 1"
              />
            </a>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center "
          xs={3}
          display={{ xs: "flex", lg: "none" }}
        >
          <MenuRoundedIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            htmlColor="#f9dc9b"
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => navigate("/festival")}>
              Festival del Chocolate
            </MenuItem>
            <MenuItem onClick={() => navigate("/programa")}>Programa</MenuItem>
            <MenuItem onClick={() => navigate("/historia")}>
              Historia del Chocolate
            </MenuItem>
            <MenuItem onClick={() => navigate("/ven-al-festival")}>
              Ven al Festival
            </MenuItem>
            <MenuItem onClick={() => navigate("/status")}>Expositores</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
