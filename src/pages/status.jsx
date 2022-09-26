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
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
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
import { Upgrade } from "@mui/icons-material";
import moment from "moment";
import "moment/locale/es-mx";

const db = getFirestore(app);

const Status = () => {
  const [request, setRequest] = useState([]);
  const [formData, setFormData] = useState({});
  /*  useEffect(() => {
    async function fetchData() {
      const q = query(
        collection(db, "request"),
        where("rfc", "==", "vihl980426tt4")
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setRequest(doc.data());
      });
    }
    fetchData();
  }, []); */

  const handleSubmit = async () => {
    if (!formData?.rfc?.trim() || !formData?.folio?.trim()) {
      return toast.warning("Favor de llenar todos los campos");
    }

    try {
      const q = query(
        collection(db, "request"),
        where("rfc", "==", formData.rfc),
        where("folio", "==", formData.folio)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach((doc) => {
          setRequest(doc.data());
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
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item container spacing={2}>
          <Grid item textAlign="center">
            <StaticImage
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
            xs
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
                    rfc: e.target.value.toUpperCase(),
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
        {request.length != 0 ? (
          <Grid item container justifyContent="center">
            <Grid item>
              <Table>
                <TableHead>
                  <TableCell>Folio</TableCell>
                  <TableCell>Contacto</TableCell>
                  <TableCell>Empresa</TableCell>
                  <TableCell>RFC</TableCell>
                  <TableCell>Estatus</TableCell>
                  <TableCell>Observaciones</TableCell>
                  <TableCell>Fecha de registro</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableHead>
                <TableBody>
                  <TableCell>{request?.folio}</TableCell>
                  <TableCell>{request?.nombre}</TableCell>
                  <TableCell>{request?.empresa}</TableCell>
                  <TableCell>{request?.rfc}</TableCell>
                  <TableCell>{request?.status}</TableCell>
                  <TableCell>{request?.observaciones}</TableCell>
                  <TableCell>
                    {request?.createAt?.toDate().toLocaleDateString("es-MX")}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      startIcon={<Upgrade />}
                      disabled={
                        request?.status === "En revisión" ? true : false
                      }
                    >
                      Modificar documentos
                    </Button>
                  </TableCell>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Status;
