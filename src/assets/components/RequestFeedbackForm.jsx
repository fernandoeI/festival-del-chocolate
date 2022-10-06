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
import {
  ACEPT,
  CANCEL,
  COMPLETED,
  IN_PROCESS,
  NEED_MODIFY,
} from "../../utils/constants";

const RequestFeedbackForm = ({
  control,
  watch,
  handleSubmit,
  onSubmit,
  loading,
}) => {
  const statuses = [IN_PROCESS, NEED_MODIFY, COMPLETED, ACEPT, CANCEL];

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
      {/* ACEPTED FIELDS */}
      {watch("status") === ACEPT ? (
        <>
          <Grid item>
            <Controller
              name="squareMeter"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  label="Metro cuadrado*"
                  multiline
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="pricePerMeter"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  label="Precio por metro*"
                  multiline
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="total"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  label="Total*"
                  multiline
                />
              )}
            />
          </Grid>
        </>
      ) : null}
      {/* ACEPTED FIELDS */}
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
