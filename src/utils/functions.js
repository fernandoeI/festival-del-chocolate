import moment from "moment/moment";
import { blueGrey, green, orange, red, yellow } from "@mui/material/colors";
import { ACEPT, CANCEL, COMPLETED, IN_PROCESS, NEED_MODIFY } from "./constants";

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

export const getStatusColor = (status) => {
  switch (status) {
    case IN_PROCESS:
      return blueGrey[500];
    case NEED_MODIFY:
      return orange[500];
    case COMPLETED:
      return yellow[600];
    case ACEPT:
      return green[500];
    case CANCEL:
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

export const getLastFeedback = (request) => {
  if (request?.feedbacks) {
    const status = request.feedbacks.sort((a, b) => {
      const dateA = moment.utc(a.createAt * 1000);
      const dateB = moment.utc(b.createAt * 1000);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
    return status[0].observations;
  } else {
    return request.observations;
  }
};

export const getLastAceptedStatus = (feedbacks) => {
  const status = feedbacks
    .filter((feed) => feed.status === ACEPT)
    .sort((a, b) => {
      const dateA = moment.utc(a.createAt * 1000);
      const dateB = moment.utc(b.createAt * 1000);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
  return status[0];
};

export const getQRValue = (data) => {
  const baseUrl = "https://festivaldelchocolate.mx/ficha-pago";
  let params = "";

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      params += key + "=" + data[key] + "&";
    }
  }

  return baseUrl + "?" + params;
};
