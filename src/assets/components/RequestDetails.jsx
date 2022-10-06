import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useForm } from "react-hook-form";
import { RequestContext } from "../../context/RequestContext";
import RequestFeedbackForm from "./RequestFeedbackForm";
import RequestFeedbackHistory from "./RequestFeedbackHistory";
import { saveFeedback } from "../../services/admin";

const RequestDetails = ({ open, setOpen }) => {
  const { requestSelected: request, setRequestSelected } =
    useContext(RequestContext);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      status: "",
      observations: "",
      squareMeter: "",
      pricePerMeter: "",
      total: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await saveFeedback(data, request);
      reset({ status: "", observations: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setRequestSelected(null);
    setOpen(false);
  };

  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
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
                watch={watch}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                loading={loading}
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
