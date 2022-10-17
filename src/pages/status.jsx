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
        where("rfc", "==", formData.rfc.toUpperCase()),
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
                  <TableCell>
                    <FiberManualRecord
                      fontSize="small"
                      style={{
                        marginRight: 6,
                        color: getStatusColor(getLastStatus(request)),
                      }}
                    />
                    {getLastStatus(request)}
                  </TableCell>
                  <TableCell>{getLastFeedback(request)}</TableCell>
                  <TableCell>
                    {request?.createAt?.toDate().toLocaleDateString("es-MX")}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      startIcon={<Upgrade />}
                      disabled={
                        true
                        /* request?.status === "En proceso de validación"
                          ? true
                          : false */
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

const Documentation = ({ data }) => {
  const form = useRef();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const files = [
    {
      code: "csf",
      name: "Constancia de situación fiscal",
    },
    {
      code: "cd",
      name: "Comprobante de domicilio",
    },
    {
      code: "iov",
      name: "Identificación oficial vigente",
    },
    {
      code: "32d",
      name: "Opinión de cumplimiento de obligaciones ficales (32D)",
    },
    {
      code: "34bis",
      name: "Opinión de cumplimiento de obligaciones ficales (34bis)",
    },
  ];

  /* const iterablePromise = async (promises) => {
    let resolvedIterable = [];
    while (promises.length !== resolvedIterable.length) {
      resolvedIterable = await Promise.allSettled(promises);
    }
    return resolvedIterable;
  } */

  const handleSubmit = async (e) => {
    /*   try {
      e.preventDefault();
      setLoading(true);

      const documents = [];
      const storage = getStorage();
      const today = new Date(Date.now())
        .toLocaleDateString()
        .replace(/\//g, "");

      if (files.length !== selected.length)
        return toast.error("Todos los documentos son obligatorios");

      const uploadPromises = selected.map(async (item) => {
        const documentRef = ref(
          storage,
          `docs/${data.rfc.toUpperCase()}/${item.code}_${today}_${v4()}.pdf`
        );
        const snapshot = await uploadBytes(documentRef, item.file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        documents.push(downloadURL);
      });

      await Promise.all(uploadPromises);

      const docsRef = collection(db, "request");
      await addDoc(docsRef, {
        conexionDobleSencilla: data?.adicional1 || 0,
        conexionDobleEspecial: data?.adicional2 || 0,
        conexion220: data?.adicional3 || 0,
        partner1: data?.partner1 || " ",
        partner2: data?.partner2 || " ",
        calle: data?.calle,
        colonia: data?.colonia,
        cp: data?.cp,
        email: data?.email,
        empresa: data?.empresa,
        estado: data?.estado,
        ext: data?.ext,
        facebook: data?.facebook,
        giro: data?.giro,
        instagram: data?.instagram,
        mandil: data?.mandil || 0,
        marca: data?.marca || " ",
        municipio: data?.municipio,
        nombre: data?.nombre,
        operacion: data?.operacion,
        productos: data?.productos,
        reutilizaLugar: data?.reutilizaLugar || false,
        rfc: data?.rfc?.toUpperCase(),
        telefono: data?.telefono,
        twitter: data?.twitter,
        createAt: new Date(),
        observaciones: "",
        status: "En proceso de validación",
        escencia: data?.escencia || false,
        marca: data?.marca || " ",
        folio: data?.folio,
        documents,
      });

      toast.success("Soliciud creada. Su folio es: " + data?.folio);

      await emailjs.send(
        "service_q44o3po",
        "template_bkjuopp",
        {
          name: data?.nombre,
          empresa: data?.empresa,
          folio: data?.folio,
          to_email: data?.email,
        },
        "s8gxbtmds2srypNlQ"
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "Hubo un problema al crear tu solicitud. Recargue e intente de nuevo."
      );
    } finally {
      setLoading(false);
    } */
  };

  const handleChange = (file, type) => {
    const selectedDocs = selected;
    const found = selectedDocs.findIndex((doc) => doc.type === type.name);
    if (found !== -1) {
      // Document was already in the array, so we remove it
      selectedDocs.splice(found, 1);
    }
    selectedDocs.push({ file, type: type.name, code: type.code });
    setSelected([...selectedDocs]);
  };

  const getFileSelectorValue = (name) => {
    if (name) return selected.find((doc) => doc.name === name);
    return undefined;
  };
  return (
    <Grid
      container
      spacing={2}
      maxWidth="md"
      component="form"
      ref={form}
      onSubmit={handleSubmit}
    >
      {loading ? (
        <Grid container flexDirection="column">
          <Grid item>
            <CircularProgress color="primary" size={120} />
          </Grid>
          <Grid item>
            <Typography variant="h6">Creando solicitud...</Typography>
          </Grid>
        </Grid>
      ) : null}

      {/**Contenedor General de inputs  */}
      {!loading ? (
        <>
          <Grid item container flexDirection="row" columnSpacing={{ sm: 2 }}>
            {files
              /*   .filter((file) => {
              const rfc = data.rfc.length;
              if (rfc === 12) return true;
              return file.maxDigitsRFC === rfc;
            }) */
              .map((file, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <FileSelector
                    label={file.name}
                    onChange={(item) => handleChange(item, file)}
                    value={getFileSelectorValue(file.name)}
                  />
                </Grid>
              ))}
            <Grid item xs={12}>
              <Typography fontWeight="bold">
                Al continuar, usted acepta los{" "}
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FLineamientos%20%202022.pdf?alt=media&token=8c5e7644-6ced-45ca-bfd6-ea1bf7775069"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  lineamientos
                </a>{" "}
                para el funcionamiento del Festival del Chocolate 2022
              </Typography>
            </Grid>
          </Grid>

          {data?.name ? (
            <input type="hidden" name="name" value={data?.name} />
          ) : null}
          {data?.empresa ? (
            <input type="hidden" name="empresa" value={data?.empresa} />
          ) : null}
          {data?.folio ? (
            <input type="hidden" name="folio" value={data?.folio} />
          ) : null}
          {data?.email ? (
            <input type="hidden" name="to_email" value={data?.email} />
          ) : null}
        </>
      ) : null}

      <Grid item container flexDirection="row" spacing={2}>
        <Grid item>
          <Button disabled={loading} variant="contained" type="submit">
            Actualizar documentación
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Status;
