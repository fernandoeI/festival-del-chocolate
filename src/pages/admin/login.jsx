import React, { useEffect } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Seo from "../../assets/components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import "../../utils/server/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
const auth = getAuth();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (!data?.email?.trim() || !data?.password?.trim()) {
        return toast.warning("Todos los datos son obligatorios");
      }
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/admin");
    } catch (error) {
      toast.error(
        error.message === "Firebase: Error (auth/invalid-email)."
          ? "Email invalido"
          : error.message === "Firebase: Error (auth/user-not-found)."
          ? "No se encontró usuario registrado."
          : error.message === "Firebase: Error (auth/wrong-password)."
          ? "La contraseña es incorrecta"
          : error.message
      );
      console.log(error.message);
    }

    console.log("🚀 ~ file: login.jsx ~ line 16 ~ Login ~ data", data);
  };

  useEffect(() => {
    const fetchData = () => {
      if (auth.currentUser) navigate("/admin");
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth={false} style={{ maxWidth: 730 }}>
      <Seo />

      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid
          item
          component="form"
          container
          direction="column"
          spacing={3}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item textAlign="center">
            <StaticImage
              alt="logo festival"
              src="../../assets/images/icon.png"
              placeholder="none"
              width={250}
            />
          </Grid>
          <Grid item>
            <Typography variant="h1" color="primary">
              Iniciar sesión
            </Typography>
            <Typography variant="body2" color="GrayText" marginTop={1}>
              Administre las solicitudes de registro de expositores para el
              evento de Festival de Chocolate. Ingrese las credenciales de
              acceso, sino cuentan con ella, realice la solicitud a la Unidad de
              Apoyo Técnico e Informático de está secretaria.
            </Typography>
          </Grid>
          <Grid item>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  label="Correo institucional*"
                  error={!!errors.email?.type}
                  helperText={
                    errors.email?.type === "required"
                      ? "Campo obligatorio*"
                      : "micorreo@tabasco.gob.mx"
                  }
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  type="password"
                  label="Contraseña*"
                  error={!!errors.password?.type}
                  helperText={
                    errors.password?.type === "required"
                      ? "Campo obligatorio*"
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
