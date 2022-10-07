import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import "moment/locale/es-mx";
import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import Seo from "../../assets/components/seo";
import RequestDetails from "../../assets/components/RequestDetails";
import { navigate } from "gatsby";
import { RequestProvider } from "../../context/RequestContext";
import RequestTable from "../../assets/components/RequestTable";

const auth = getAuth();

const Index = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!auth.currentUser) {
        navigate("/admin/login");
      }
    };
    fetchData();
  }, []);

  return (
    <RequestProvider>
      <Container maxWidth="lg" style={{ marginTop: theme.spacing(3) }}>
        <Seo />

        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h1">Bienvenido(a)</Typography>
            <Typography variant="body2" color="GrayText" marginTop={1}>
              Administre las solicitudes de registro de expositores para el
              evento de Festival de Chocolate. Por temas de seguridad y evitar
              confusiones al usuario, es importante recordar que las solicitudes
              solo estarán asignadas a una persona para su revisión.
            </Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={logout}
              style={{ display: "block", marginTop: theme.spacing(2) }}
            >
              Cerrar sesión
            </Button>
          </Grid>

          <Grid item width="100%">
            <RequestTable setOpen={setOpen} />
          </Grid>
        </Grid>

        {/* row details */}
        {open ? <RequestDetails open={open} setOpen={setOpen} /> : null}
      </Container>
    </RequestProvider>
  );
};

export default Index;
