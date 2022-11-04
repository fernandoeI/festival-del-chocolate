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
  Button,
} from "@mui/material";
import moment from "moment";
import { useForm } from "react-hook-form";
import { RequestContext } from "../../context/RequestContext";
import RequestFeedbackForm from "./RequestFeedbackForm";
import RequestFeedbackHistory from "./RequestFeedbackHistory";
import { saveFeedback } from "../../services/admin";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { FILES } from "../../utils/constants";
import { toast, useToast } from "react-toastify";
import RequestInformation from "./RequestInformation";

const RequestDetails = ({ open, setOpen }) => {
  const { requestSelected: request, setRequestSelected } =
    useContext(RequestContext);
  const [openInneDialog, setOpenInneDialog] = useState(false);
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

  console.log(request);

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

  const getName = (document) => {
    if (document.split("/")[7].includes(`Fcsf_`)) {
      return "Constancia de situación fiscal";
    }
    if (document.split("/")[7].includes(`Fcd_`)) {
      return "Comprobante de domicilio";
    }
    if (document.split("/")[7].includes(`Fiov_`)) {
      return "Identificación oficial vigente";
    }
    if (document.split("/")[7].includes(`F32d_`)) {
      return "Opinión de cumplimiento de obligaciones ficales (32D)";
    }
    if (document.split("/")[7].includes(`F34bis_`)) {
      return "Opinión de cumplimiento de obligaciones ficales (34bis)";
    }
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
              <Button
                style={{ marginBottom: "1rem" }}
                onClick={() => setOpenInneDialog(true)}
                startIcon={<RemoveRedEyeOutlined fontSize="small" />}
              >
                Ver información completa
              </Button>
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
                    <ListItemText primary={getName(document)} />
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

      {open ? (
        <Dialog
          maxWidth="xl"
          open={openInneDialog}
          onClose={() => setOpenInneDialog(false)}
        >
          <DialogContent>
            <Typography
              variant="body1"
              color="primary"
              fontWeight={500}
              marginBottom={1}
            >
              Información del solicitante
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Nombre del representante legal"
                  description={request.nombre}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation title="RFC" description={request.rfc} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation title="Calle" description={request.calle} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="No. exterior"
                  description={request.ext}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Colonia"
                  description={request.colonia}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Municipio"
                  description={request.municipio}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Código postal"
                  description={request.cp}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Estado"
                  description={request.estado}
                />
              </Grid>
            </Grid>

            <Typography
              variant="body1"
              color="primary"
              fontWeight={500}
              marginTop={3}
              marginBottom={1}
            >
              Datos generales de la empresa
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Nombre de la empresa"
                  description={request.empresa}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Teléfono"
                  description={request.telefono}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Correo eléctronico"
                  description={request.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Facebook"
                  description={request.facebook}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Instagram"
                  description={request.instagram}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Twitter"
                  description={request.twitter}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Giro o actividad"
                  description={request.giro}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Años de experiencia"
                  description="N/A"
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      ) : null}
    </Dialog>
  );
};

export default RequestDetails;
