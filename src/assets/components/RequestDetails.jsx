import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import RequestFeedbackForm from "./RequestFeedbackForm";
import RequestFeedbackHistory from "./RequestFeedbackHistory";

const RequestDetails = ({ open, setOpen, request }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <Dialog maxWidth="lg" open={open} onClose={(e) => setOpen(false)}>
      <DialogTitle>
        {request.nombre}
        <Typography variant="body2" color="GrayText">
          {moment.utc(request.createAt.seconds * 1000).format("MMMM DD, YYYY")}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} container spacing={2}>
            <Grid item xs={12}>
              <RequestFeedbackForm
                control={control}
                handleSubmit={handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography marginBottom={2} color="primary">
                Documentos subidos
              </Typography>
              <List dense disablePadding style={{ wordBreak: "break-all" }}>
                {request.documents.map((document, key) => (
                  <ListItemButton
                    key={key}
                    component="a"
                    href={document}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary={document} />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <RequestFeedbackHistory />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDetails;
