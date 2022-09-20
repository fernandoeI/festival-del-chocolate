import React from "react";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const RequestFeedbackForm = ({ control, handleSubmit }) => {
  return (
    <Grid container component="form" direction="column" spacing={2}>
      <Grid item>
        <Typography marginBottom={2} color="primary">
          Agregar observaciones
        </Typography>
      </Grid>
      <Grid item>
        <Controller
          name="feedback"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              select
              size="small"
              label="Estatus*"
            >
              <MenuItem value={0}>Solicitado</MenuItem>
              <MenuItem value={0}>En proceso</MenuItem>
              <MenuItem value={0}>Cancelado</MenuItem>
              <MenuItem value={0}>Aceptado</MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name="feedback"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              label="Observaciones*"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Button fullWidth variant="contained" color="primary">
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestFeedbackForm;
