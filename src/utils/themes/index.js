import { createTheme } from "@mui/material";
import { COLORS, BASE_THEME, RADIUS } from "./constants";

export const theme = createTheme({
  ...BASE_THEME,
  palette: {
    background: {
      default: COLORS.white,
    },
    primary: {
      main: "#6C3F37",
      light: "#FCEADE",
      dark: "#612f23",
      contrastText: COLORS.white,
    },
  },
});

export const GREY = createTheme({
  ...BASE_THEME,
  palette: {
    primary: {
      main: "#C7C7C7",
      contrastText: COLORS.black.primary,
    },
  },
  components: {
    ...BASE_THEME.components,
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
          textTransform: "none",
          boxShadow:
            "0px 2px 10px rgba(199, 199, 199, 0.2), 0px 3px 8px rgba(199, 199, 199, 0.25), 0px 4px 5px -4px rgba(199, 199, 199, 0.25)",
        },
      },
    },
  },
});

export const WHITE = createTheme({
  ...BASE_THEME,
  palette: {
    primary: {
      main: COLORS.white,
      contrastText: COLORS.black.primary,
    },
  },
});
