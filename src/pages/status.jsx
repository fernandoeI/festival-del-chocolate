import {
  Button,
  Container,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState, useRef } from "react";
import Seo from "../assets/components/seo";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../utils/server/firebase";
import { toast } from "react-toastify";
import {
  FiberManualRecord,
  RequestPageTwoTone,
  Upgrade,
} from "@mui/icons-material";
import moment from "moment";
import "moment/locale/es-mx";
import FileSelector from "../assets/components/FileSelector";
import {
  getLastFeedback,
  getLastStatus,
  getStatusColor,
} from "../utils/functions";
import RequestCardInformation from "../assets/components/RequestCardInformation";
import { navigate } from "gatsby";

const db = getFirestore(app);

const Status = () => {
  const [request, setRequest] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    if (!formData?.rfc?.trim() || !formData?.folio?.trim()) {
      return toast.warning("Favor de llenar todos los campos");
    }

    try {
      const q = query(
        collection(db, "request"),
        where("rfc", "==", formData.rfc.toUpperCase()),
        where("folio", "==", formData.folio)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach((doc) => {
          setRequest({ ...doc.data(), id: doc.id });
        });
      } else {
        return toast.error(
          "No se encontraron registros con los datos proporcionados"
        );
      }
    } catch (error) {
      return toast.warning("Ocurrio un error: " + error.message);
    }
  };

  return (
    <Container maxWidth="lg">
      <Seo />
      <Grid
        container
        direction="column"
        height={!request ? "100vh" : "100%"}
        alignItems="center"
        justifyContent="center"
        marginY={!request ? 0 : 3}
      >
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4} textAlign="center">
            <StaticImage
              onClick={() => navigate("/")}
              src="../assets/images/icon.png"
              alt="Logo"
              placeholder="none"
              width={250}
              imgStyle={{
                maxWidth: 250,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            direction="column"
            component="form"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h3" component="h1" color="primary">
                Consulta de estado
              </Typography>
              <Typography variant="body2" marginTop={1}>
                Aquí podrás consultar el estado de tu solicitud para ser parte
                de los expositores del 11° Festival del Chocolate
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                label="RFC con homoclave"
                size="small"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rfc: e.target.value,
                  })
                }
                value={formData?.rfc || ""}
                inputProps={{ maxLength: 13 }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                label="Folio de registro"
                size="small"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    folio: e.target.value.toLowerCase(),
                  })
                }
                value={formData?.folio || ""}
              />
            </Grid>
            <Grid item>
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Consultar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {request ? (
          <Grid item>
            <RequestCardInformation request={request} />
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Status;
