export const RADIUS = 16;

export const COLORS = {
  white: "#F7F7F3",
  black: {
    primary: "#212121",
    light: "#484848",
    dark: "#000000",
  },
  grey: {
    primary: "#E0E0E0",
    light: "#EEEEEE",
    dark: "#BDBDBD",
  },
  social: {
    facebook: "#3B5998",
    twitter: "#00ACEE",
    whatsapp: "#25D366",
    instagram:
      "linear-gradient(133.36deg, #405DE6 14.52%, #5851DB 22.51%, #833AB4 30.87%, #C13584 38.85%, #E1306C 46.83%, #F92028 54.81%, #FD1D1D 54.81%, #F56040 62.79%, #F77737 70.78%, #FCAF45 79.14%, #FFDC80 87.5%)",
    tripadvisor: "#34E0A1",
  },
  glass: {
    white: {
      background:
        "url(../assets/images/frosted-glass-texture.jpg), radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.36) 100%)",
      border:
        "linear-gradient(161.32deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 100%)",
    },
    light: {
      background:
        "url(../assets/images/frosted-glass-texture.jpg), radial-gradient(100% 100% at 0% 0%, rgba(253, 253, 253, 0) 0%, rgba(217, 217, 217, 0.3) 100%)",
      border:
        "linear-gradient(161.32deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 0.3) 100%)",
    },
  },
};

export const BASE_THEME = {
  palette: {
    secondary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    text: {
      primary: "#212121",
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      "@media (min-width: 480px)": {
        fontSize: 36,
      },
    },
    h2: {
      fontSize: 28,
      "@media (min-width: 480px)": {
        fontSize: 32,
      },
    },
    h3: {
      fontSize: 26,
      "@media (min-width: 480px)": {
        fontSize: 30,
      },
    },
    h4: {
      fontSize: 24,
      "@media (min-width: 480px)": {
        fontSize: 26,
      },
    },
    h5: {
      fontSize: 22,
    },
    h6: {
      fontSize: 18,
      "@media (min-width: 480px)": {
        fontSize: 20,
      },
    },
  },
  shadows: [
    "none",
    "0px 5px 10px rgba(203, 203, 203, 0.2)",
    "0px 5px 10px rgba(203, 203, 203, 0.25)",
    "0px 5px 15px rgba(203, 203, 203, 0.3)",
    "0px 5px 20px rgba(203, 203, 203, 0.3)",
    "0px 5px 20px rgba(203, 203, 203, 0.35)",
    "0px 8px 25px rgba(203, 203, 203, 0.35)",
    "0px 8px 25px rgba(203, 203, 203, 0.4)",
    "0px 12px 30px rgba(203, 203, 203, 0.4)",
    "0px 12px 30px rgba(203, 203, 203, 0.45)",
    "0px 15px 35px rgba(203, 203, 203, 0.45)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: RADIUS,
        },
        sizeSmall: {
          borderRadius: 10,
        },
        sizeMedium: {
          borderRadius: 14,
        },
        sizeLarge: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};
