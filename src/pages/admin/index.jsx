import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import moment from "moment";
import "moment/locale/es-mx";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import MaterialReactTable from "material-react-table";
import Seo from "../../assets/components/seo";
import { app } from "../../utils/server/firebase";
import RequestDetails from "../../assets/components/RequestDetails";
import { assignReviewer, getRequests } from "../../services/admin";
import { navigate } from "gatsby";

const auth = getAuth();

const Index = () => {
  const theme = useTheme();
  const db = getFirestore(app);
  const [data, setData] = useState([]);
  const [requestSelected, setRequestSelected] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      accessorKey: "nombre",
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
      header: "Fecha de solicitud",
      accessorFn: (data) =>
        moment.utc(data.createAt.seconds * 1000).format("MMMM DD, YYYY"),
    },
  ];

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAttendRequest = async (row) => {
    try {
      const request = row.original;

      // validate if the request has been attended
      if (!request?.reviewer) {
        const attend = window.confirm(
          "Al aceptar, solo usted podrá dar seguimiento a la solicitud."
        );

        if (!attend) return;

        await assignReviewer(request.id, auth.currentUser.uid);
      }

      // open modal
      setRequestSelected(request);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      if (!auth.currentUser) {
        navigate("/admin/login");
      } else {
        setLoading(true);
        setData(await getRequests());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: theme.spacing(3) }}>
      <Seo />

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h1">Bienvenido(a)</Typography>
          <Typography variant="body2" color="GrayText" marginTop={1}>
            Administre las solicitudes de registro de expositores para el evento
            de Festival de Chocolate. Por temas de seguridad y evitar
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
          <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnResizing={false}
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            state={{
              isLoading: loading,
              density: "comfortable",
            }}
            enableRowActions
            positionActionsColumn="last"
            renderRowActions={({ row }) => (
              <Box>
                <Tooltip
                  title={
                    row.original?.reviewer &&
                    row.original?.reviewer !== auth.currentUser.uid
                      ? "En atención"
                      : "Atender"
                  }
                  placement="top"
                >
                  <span>
                    <IconButton
                      onClick={(e) => handleAttendRequest(row)}
                      disabled={
                        row.original?.reviewer &&
                        row.original?.reviewer !== auth.currentUser.uid
                      }
                    >
                      <PlayArrow />
                    </IconButton>
                  </span>
                </Tooltip>
              </Box>
            )}
          />
        </Grid>
      </Grid>

      {/* row details */}
      {open && requestSelected ? (
        <RequestDetails
          open={open}
          setOpen={setOpen}
          request={requestSelected}
        />
      ) : null}
    </Container>
  );
};

export default Index;
