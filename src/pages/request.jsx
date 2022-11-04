import React, { useState } from "react";

import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FileSelector from "../assets/components/FileSelector";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../utils/server/firebase";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { validateEmail } from "../utils/functions";
import { navigate } from "gatsby";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

const db = getFirestore(app);

const steps = [
  "Información del solicitante",
  "Datos generales de la empresa",
  "Requerimientos adicionales",
  "Documentación requerida",
];

const Request = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({});
  const nextStep = () => setActiveStep(activeStep + 1);
  const prevStep = () => setActiveStep(activeStep - 1);
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height={500}
    >
      <StaticImage
        src="../assets/images/icon.png"
        alt="Logo"
        placeholder="none"
        width={300}
        imgStyle={{
          maxWidth: 300,
          objectFit: "contain",
          width: "100%",
        }}
      />
      <Typography variant="h2" width="90%">
        Gracias por tu interés en participar como expositor, hemos concluído con
        el proceso de registro, nos vemos en 2023!!!
      </Typography>
    </Grid>
    /*  <Grid
      container
      spacing={4}
      textAlign="center"
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={5}
      bgcolor="transparent"
    >
      <Grid item>
        <Typography variant="h4" color={theme.palette.primary.main}>
          Solicitud de registro de expositores
        </Typography>
      </Grid>
      <Grid item>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, key) => (
            <Step key={key}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item>
        {activeStep === 0 ? (
          <PersonalInformation
            nextStep={nextStep}
            data={data}
            setData={setData}
          />
        ) : null}

        {activeStep === 1 ? (
          <BusinessInformation
            data={data}
            nextStep={nextStep}
            prevStep={prevStep}
            setData={setData}
          />
        ) : null}

        {activeStep === 2 ? (
          <AditionalRequirements
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        ) : null}

        {activeStep === 3 ? (
          <Documentation
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        ) : null}
      </Grid>
    </Grid> */
  );
};

const PersonalInformation = ({ nextStep, data, setData }) => {
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Coahuila",
    "Colima",
    "Distrito Federal",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Estado de México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];
  const handleNext = async () => {
    if (
      !data?.nombre?.trim() ||
      !data?.rfc?.trim().toUpperCase() ||
      !data?.calle?.trim() ||
      !data?.ext ||
      !data?.colonia?.trim() ||
      !data?.cp ||
      !data?.municipio?.trim() ||
      !data?.estado?.trim()
    ) {
      return toast.warning("Favor de llenar todos los campos");
    }

    try {
      const q = query(collection(db, "request"), where("rfc", "==", data.rfc));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0)
        return toast.error("El RFC que ingresó ya se encuentra registrado");
    } catch (error) {
      return toast.warning("Ocurrio un error: " + error.message);
    }
    console.log(data);
    nextStep();
  };

  return (
    <Grid component="form" container spacing={2} maxWidth="md">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="nombre"
          label="Nombre del representante legal"
          value={data?.nombre || ""}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="rfc"
          label="RFC con homoclave"
          value={data?.rfc || ""}
          onChange={(e) => {
            setData({ ...data, rfc: e.target.value });
          }}
          inputProps={{ maxLength: 13 }}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="calle"
          label="Calle"
          value={data?.calle || ""}
          onChange={(e) => setData({ ...data, calle: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="ext"
          label="No. Exterior"
          value={data?.ext || ""}
          onChange={(e) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value == "" || regex.test(e.target.value)) {
              setData({ ...data, ext: e.target.value });
            }
          }}
          inputProps={{ maxLength: 5 }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="colonia"
          label="Colonia"
          value={data?.colonia || ""}
          onChange={(e) => setData({ ...data, colonia: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          name="cp"
          label="Código postal"
          value={data?.cp || ""}
          onChange={(e) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value == "" || regex.test(e.target.value)) {
              setData({ ...data, cp: e.target.value });
            }
          }}
          inputProps={{ maxLength: 5 }}
          required
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          label="Municipio"
          name="municipio"
          value={data?.municipio || ""}
          onChange={(e) => setData({ ...data, municipio: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Estado"
          color="primary"
          name="estado"
          value={data?.estado || ""}
          onChange={(e) => {
            setData({ ...data, estado: e.target.value });
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione un estado
          </MenuItem>
          {estados.map((estado, key) => (
            <MenuItem key={key} value={estado}>
              {estado}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
};

const BusinessInformation = ({ nextStep, prevStep, data, setData }) => {
  const [isHidden, setIsHidden] = useState(true);
  const giros = ["Agroindustrial", "Servicios", "Comercial", "Otro"];
  const productos = [
    "Cacao y chocolate",
    "Derivados del cacao y chocolate",
    "Gastronómicos artesanales",
    "Alimentos",
    "Vinos, carnes y quesos",
    "Artesanias",
    "Otro",
  ];

  const handleNext = async () => {
    if (
      !data?.empresa?.trim() ||
      !data?.telefono?.trim() ||
      !data?.email?.trim() ||
      !data?.facebook?.trim() ||
      !data?.instagram?.trim() ||
      !data?.twitter?.trim() ||
      !data?.giro?.trim() ||
      !data?.productos ||
      !data?.operacion?.trim() ||
      !data?.escencia
    ) {
      return toast.warning("Favor de llenar todos los campos");
    } else if (!validateEmail(data?.email?.trim())) {
      return toast.info("Revise que el correo electrónico sea valido");
    }

    console.log(data);
    nextStep();
  };

  return (
    <Grid component="form" container spacing={2} maxWidth="md">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="empresa"
          label="Nombre de la empresa"
          value={data?.empresa || ""}
          onChange={(e) => setData({ ...data, empresa: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="telefono"
          label="Teléfono"
          type="tel"
          value={data?.telefono || ""}
          onChange={(e) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value == "" || regex.test(e.target.value)) {
              setData({ ...data, telefono: e.target.value });
            }
          }}
          inputProps={{ maxLength: 10 }}
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="email"
          label="Correo electrónico"
          type="email"
          value={data?.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="facebook"
          label="Facebook"
          name="facebook"
          type="url"
          value={data?.facebook || ""}
          onChange={(e) => setData({ ...data, facebook: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="instagram"
          label="Instagram"
          name="instagram"
          type="url"
          value={data?.instagram || ""}
          onChange={(e) => setData({ ...data, instagram: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="twitter"
          label="Twitter"
          name="twitter"
          type="url"
          value={data?.twitter || ""}
          onChange={(e) => setData({ ...data, twitter: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Giro o Actividad"
          color="primary"
          name="giro"
          value={data?.giro || ""}
          onChange={(e) => {
            setData({ ...data, giro: e.target.value });
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione un giro
          </MenuItem>
          {giros.map((giro, key) => (
            <MenuItem key={key} value={giro}>
              {giro}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="operacion"
          label="Años de operación"
          value={data?.operacion || ""}
          onChange={(e) => {
            const regex = /^[0-9\b]+$/;
            if (e.target.value == "" || regex.test(e.target.value)) {
              setData({ ...data, operacion: e.target.value });
            }
          }}
          required
        />
      </Grid>
      <Grid item container textAlign="left">
        <FormGroup>
          <FormLabel>
            ¿Cuáles de los siguientes productos comercializa?
          </FormLabel>
          {productos.map((producto, key) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  color="primary"
                  checked={
                    data?.productos &&
                    data?.productos.some((item) => item === producto)
                  }
                  onChange={(e) => {
                    const newProductos = data?.productos
                      ? [...data.productos]
                      : [];

                    const found = newProductos.findIndex(
                      (item) => item === producto
                    );
                    if (found !== -1) {
                      newProductos.splice(found, 1);
                    } else {
                      newProductos.push(producto);
                    }
                    setData({ ...data, productos: newProductos });
                  }}
                />
              }
              label={producto}
            />
          ))}
        </FormGroup>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "left" }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            ¿Forma parte del programa Esencia Tabasco?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => {
              setData({ ...data, escencia: e.target.value });
            }}
          >
            <FormControlLabel
              value="si"
              control={<Radio onChange={() => setIsHidden(false)} />}
              label="Si"
            />
            <FormControlLabel
              value="No"
              control={<Radio onChange={() => setIsHidden(true)} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={6} display={isHidden ? "none" : "block"}>
        <TextField
          fullWidth
          name="marca"
          label="Nombre de la marca"
          value={data?.marca || ""}
          onChange={(e) => setData({ ...data, marca: e.target.value })}
          required
        />
      </Grid>

      <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={prevStep}>
            Volver
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const AditionalRequirements = ({ nextStep, prevStep, data, setData }) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleNext = async () => {
    console.log(data);
    if (!data?.participo) {
      return toast.warning("Favor de llenar todos los campos");
    }
    const folio = v4().split("-");
    setData({ ...data, folio: folio[1] + folio[2] });
    nextStep();
  };

  return (
    <Grid component="form" container spacing={2} maxWidth="md">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="compañero1"
          label="Nombre completo del primer acompañante"
          value={data?.partner1 || ""}
          onChange={(e) => setData({ ...data, partner1: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="compañero2"
          label="Nombre completo del segundo acompañante"
          value={data?.partner2 || ""}
          onChange={(e) => setData({ ...data, partner2: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Conexión doble sencilla"
          color="primary"
          name="adicional"
          value={data?.adicional1 || ""}
          onChange={(e) => {
            setData({ ...data, adicional1: e.target.value });
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione cuantos
          </MenuItem>
          {[0, 1, 2].map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Conexión 110v especial"
          color="primary"
          name="adicional2"
          value={data?.adicional2 || ""}
          onChange={(e) => {
            setData({ ...data, adicional2: e.target.value });
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione cuantos
          </MenuItem>
          {[0, 1, 2].map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Conexión 220v"
          color="primary"
          name="adicional3"
          value={data?.adicional3 || ""}
          onChange={(e) => {
            setData({ ...data, adicional3: e.target.value });
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione cuantos
          </MenuItem>
          {[0, 1, 2].map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ textAlign: "left" }}
          select
          fullWidth
          label="Mandiles adicionales"
          color="primary"
          name="mandil"
          value={data?.mandil || ""}
          onChange={(e) => {
            setData({ ...data, mandil: e.target.value });
          }}
        >
          <MenuItem value="Seleccione cuantos" disabled selected>
            Seleccione cuantos
          </MenuItem>
          {[0, 1, 2, 3, 4, 5].map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: "left" }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            style={{ textAlign: "left" }}
          >
            ¿Participó en el 10mo Festival del Chocolate?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => {
              setData({ ...data, participo: e.target.value });
            }}
          >
            <FormControlLabel
              value="si"
              control={<Radio onChange={() => setIsHidden(false)} />}
              label="Si"
            />
            <FormControlLabel
              value="No"
              control={<Radio onChange={() => setIsHidden(true)} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={6}
        display={isHidden ? "none" : "block"}
        style={{ textAlign: "left" }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            ¿Le gustaría utilizar el mismo espacio fisico de aquella edición?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => {
              setData({ ...data, reutilizaLugar: e.target.value });
            }}
          >
            <FormControlLabel value="si" control={<Radio />} label="Si" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item container flexDirection="row" spacing={2}>
        <Grid item>
          <Button variant="outlined" onClick={prevStep}>
            Regresar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleNext}>
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Documentation = ({ nextStep, prevStep, data }) => {
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
    try {
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
    }
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
        {prevStep ? (
          <Grid item>
            <Button disabled={loading} variant="outlined" onClick={prevStep}>
              Regresar
            </Button>
          </Grid>
        ) : null}
        <Grid item>
          <Button disabled={loading} variant="contained" type="submit">
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Request;
