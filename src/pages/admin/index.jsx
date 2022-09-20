import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import {
  Box,
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
      accessorFn: (data) => data.createAt.seconds,
    },
  ];

  const handleAttendRequest = (row) => {
    try {
      // validate if the request has been attended

      // open modal
      setRequestSelected(row.original);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "request"));
        const snapshot = await getDocs(q);

        let docData = [];
        snapshot.forEach((doc) => docData.push(doc.data()));
        setData(docData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
                <Tooltip title="Atender" placement="top">
                  <IconButton onClick={(e) => handleAttendRequest(row)}>
                    <PlayArrow />
                  </IconButton>
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
