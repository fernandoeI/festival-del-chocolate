import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

const RequestFeedbackForm = ({ control, handleSubmit, onSubmit, loading }) => {
  const statuses = [
    "En proceso de validación",
    "Validación completada",
    "Aceptado",
    "Cancelado",
  ];

  return (
    <Grid
      container
      component="form"
      direction="column"
      spacing={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item>
        <Typography marginBottom={2} color="primary">
          Agregar observaciones
        </Typography>
      </Grid>
      <Grid item>
        <Controller
          name="status"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Estatus*"
              select
              size="small"
            >
              {statuses.map((status, key) => (
                <MenuItem key={key} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name="observations"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              label="Observaciones*"
              multiline
            />
          )}
        />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={25} color="inherit" /> : null
          }
        >
          {!loading ? "Enviar" : "Guardando"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestFeedbackForm;
