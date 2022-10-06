import React, { useContext } from "react";
import moment from "moment";
import { getAuth } from "firebase/auth";
import MaterialReactTable from "material-react-table";
import { FiberManualRecord, PlayArrow } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { RequestContext } from "../../context/RequestContext";
import { getLastStatus, getStatusColor } from "../../utils/functions";

const auth = getAuth();

const RequestTable = ({ setOpen }) => {
  const { requests, loading, setRequestSelected } = useContext(RequestContext);

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
      header: "Estatus",
      id: "status",
      accessorFn: (data) => {
        const status = getLastStatus(data);
        return {
          status,
          color: getStatusColor(status),
        };
      },
      Cell: ({ cell }) => {
        const values = cell.getValue();
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FiberManualRecord
              fontSize="small"
              style={{
                marginRight: 6,
                color: values.color,
              }}
            />
            {values.status}
          </div>
        );
      },
    },
    {
      header: "Fecha de solicitud",
      id: "createAt",
      accessorFn: (data) =>
        moment.utc(data.createAt.seconds * 1000).format("MMMM DD, YYYY"),
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={requests}
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
  );
};

export default RequestTable;
