import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./src/utils/themes";
import "./src/assets/sass/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
    <CssBaseline />
    <ToastContainer theme="dark" />
  </ThemeProvider>
);
