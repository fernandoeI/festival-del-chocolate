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
  TextField,
} from "@mui/material";
import moment from "moment";
import { useForm } from "react-hook-form";
import { RequestContext } from "../../context/RequestContext";
import RequestFeedbackForm from "./RequestFeedbackForm";
import RequestFeedbackHistory from "./RequestFeedbackHistory";
import { saveFeedback, updateUserInfo } from "../../services/admin";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { FILES } from "../../utils/constants";
import { toast, useToast } from "react-toastify";
import RequestInformation from "./RequestInformation";

const RequestDetails = ({ open, setOpen }) => {
  const { requestSelected: request, setRequestSelected } =
    useContext(RequestContext);
  const [dataToUpdate, setDataToUpdate] = useState(request);
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateUserInfo(dataToUpdate, request);

    return toast.success("Registro actualizado");
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
            <Grid
              container
              justifyContent="flex-end"
              textAlign="right"
              marginBottom={2}
            >
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleUpdate}>
                  Actualizar información
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="body1"
              color="primary"
              fontWeight={500}
              marginBottom={1}
            >
              Información del solicitante
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Nombre del representante legal"
                  description={request.nombre}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Representante"
                  variant="outlined"
                  value={dataToUpdate.nombre}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, nombre: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation title="RFC" description={request.rfc} /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="RFC"
                  variant="outlined"
                  value={dataToUpdate.rfc}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, rfc: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation title="Calle" description={request.calle} /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Calle"
                  variant="outlined"
                  value={dataToUpdate.calle}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, calle: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="No. exterior"
                  description={request.ext}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="No. exterior"
                  variant="outlined"
                  value={dataToUpdate.ext}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, ext: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Colonia"
                  description={request.colonia}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Colonia"
                  variant="outlined"
                  value={dataToUpdate.colonia}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      colonia: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Municipio"
                  description={request.municipio}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Municipio"
                  variant="outlined"
                  value={dataToUpdate.municipio}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      municipio: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Código postal"
                  description={request.cp}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Código postal"
                  variant="outlined"
                  value={dataToUpdate.cp}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, cp: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Estado"
                  description={request.estado}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Estado"
                  variant="outlined"
                  value={dataToUpdate.estado}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, estado: e.target.value })
                  }
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Nombre de la empresa"
                  description={request.empresa}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Nombre de la empresa"
                  variant="outlined"
                  value={dataToUpdate.empresa}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      empresa: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Teléfono"
                  description={request.telefono}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Teléfono"
                  variant="outlined"
                  value={dataToUpdate.telefono}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      telefono: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Correo eléctronico"
                  description={request.email}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Correo eléctronico"
                  variant="outlined"
                  value={dataToUpdate.email}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Facebook"
                  description={request.facebook}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Facebook"
                  variant="outlined"
                  value={dataToUpdate.facebook}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      facebook: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Instagram"
                  description={request.instagram}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Instagram"
                  variant="outlined"
                  value={dataToUpdate.instragram}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      instragram: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Twitter"
                  description={request.twitter}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Twitter"
                  variant="outlined"
                  value={dataToUpdate.twitter}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      twitter: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Giro o actividad"
                  description={request.giro}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Giro o actividad"
                  variant="outlined"
                  value={dataToUpdate.giro}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, giro: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Años de operación"
                  description={request.operacion}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Años de operación"
                  variant="outlined"
                  value={dataToUpdate.operacion}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      operacion: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Forma parte de Escencia Tabasco"
                  description={request.escencia}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Nombre de la marca"
                  description={request.marca}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Nombre de la marca"
                  variant="outlined"
                  value={dataToUpdate.marca}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, marca: e.target.value })
                  }
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
              Requerimientos adicionales
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Nombre del primer acompañante"
                  description={request.partner1}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Nombre del primer acompañante"
                  variant="outlined"
                  value={dataToUpdate.partner1}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      partner1: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Nombre del segundo acompañante"
                  description={request.partner2}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Nombre del segundo acompañante"
                  variant="outlined"
                  value={dataToUpdate.partner2}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      partner2: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Conexión doble sencilla"
                  description={request.adicional1}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Conexión doble sencilla"
                  variant="outlined"
                  value={dataToUpdate.adicional1}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      adicional1: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Conexión 110v especial"
                  description={request.adicional2}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Conexión 110v especial"
                  variant="outlined"
                  value={dataToUpdate.adicional2}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      adicional2: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Conexión 220v"
                  description={request.adicional3}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Conexión 220v"
                  variant="outlined"
                  value={dataToUpdate.adicional3}
                  onChange={(e) =>
                    setDataToUpdate({
                      ...dataToUpdate,
                      adicional3: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {/* <RequestInformation
                  title="Mandiles adicionales"
                  description={request.mandil}
                /> */}
                <TextField
                  fullWidth
                  size="small"
                  label="Mandiles adicionales"
                  variant="outlined"
                  value={dataToUpdate.mandil}
                  onChange={(e) =>
                    setDataToUpdate({ ...dataToUpdate, mandil: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="¿Participó en la edición anterior?"
                  description={request.participo}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <RequestInformation
                  title="Quiere utilizar el espacio de la edición anterior"
                  description={request.reutilizaLugar}
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
