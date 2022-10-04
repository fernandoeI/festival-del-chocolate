import { green, orange, red, yellow } from "@mui/material/colors";
import moment from "moment/moment";

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

export const getLastStatus = (request) => {
  if (request?.feedbacks) {
    const status = request.feedbacks.sort((a, b) => {
      const dateA = moment.utc(a.createAt * 1000);
      const dateB = moment.utc(b.createAt * 1000);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
    return status[0].status;
  } else {
    return request.status;
  }
};
