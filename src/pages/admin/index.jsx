import React, { useMemo } from "react";
import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import MaterialReactTable from "material-react-table";
import Seo from "../../assets/components/seo";

const Index = () => {
  const theme = useTheme();

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nombre",
      },
      {
        accessorKey: "rfc",
        header: "RFC",
      },
      {
        accessorKey: "empresa",
        header: "Empresa",
      },
      {
        accessorKey: "status",
        header: "Estatus",
      },
      {
        accessorKey: "createAt",
        header: "Fecha de solicitud",
      },
    ],
    []
  );

  return (
    <Container maxWidth="lg" style={{ marginTop: theme.spacing(3) }}>
      <Seo />

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h1">
            Bienvenido(a) NOMBRE DEL EMPLEADO
          </Typography>
          <Typography variant="body2" color="GrayText" marginTop={1}>
            Administre las solicitudes de registro de expositores para el evento
            de Festival de Chocolate. Por temas de seguridad y evitar
            confusiones al usuario, es importante recordar que las solicitudes
            solo estarán asignadas a una persona para su revisión.
          </Typography>
        </Grid>

        <Grid item width="100%">
          <MaterialReactTable
            columns={columns}
            data={[]}
            enableColumnResizing={false}
            enableDensityToggle={false}
            enableFullScreenToggle={false}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
