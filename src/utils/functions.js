import { green, orange, red, yellow } from "@mui/material/colors";

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

export const getStatusColor = (status) => {
  switch (status) {
    case "En proceso de validación":
      return orange[500];
    case "Validación completada":
      return yellow[600];
    case "Aceptado":
      return green[500];
    case "Cancelado":
      return red[500];
  }
};
