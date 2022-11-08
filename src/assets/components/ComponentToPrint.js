import React from "react";
import { Grid, Typography } from "@mui/material";
import moment from "moment";
import "moment/locale/es-mx";

export class ComponentToPrint extends React.PureComponent {
  render() {
    const { data, qr } = this.props;

    return (
      <Grid
        container
        spacing={5}
        direction="column"
        justifyContent="center"
        height="100vh"
        width="100%"
        paddingX={8}
        sx={{
          "& span": {
            fontWeight: "bold",
          },
        }}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Grid item>
            <img
              src={require("../images/finanzas.png").default}
              style={{ width: 300 }}
              alt="Image 1"
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" width={300} textAlign="center">
              DIRECCIÓN DE RECAUDACIÓN RECEPTORÍA DE CENTRO
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          spacing={1}
          alignItems="flex-end"
        >
          <Grid item>
            <Typography>
              Villahermosa, Tabasco a{" "}
              {moment().format("DD [de] MMMM [de] YYYY")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontWeight="bold">Folio: {data.folio}</Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h5">PASE DE CAJA</Typography>
          </Grid>
          <Grid item>
            <Typography fontWeight="bold">
              PAGO DE EXPOSITORES DESTIVAL DEL CHOCOLATE 2022
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          width={600}
          style={{ margin: "0 auto" }}
          spacing={2}
        >
          <Grid item>
            <Typography>NOMBRE DEL EXPOSITOR: {data.nombre}</Typography>
          </Grid>
          <Grid item>
            <Typography>RFC: {data.rfc}</Typography>
          </Grid>
          <Grid item>
            <Typography>EMPRESA: {data.empresa}</Typography>
          </Grid>
          <Grid item>
            <Typography>MUNICIPIO: {data.municipio}</Typography>
          </Grid>
          <Grid item>
            <Typography>No. METROS CUADRADOS: {data.noMetros}</Typography>
          </Grid>
          <Grid item>
            <Typography>COSTO POR M2: {data.costoM2}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          spacing={2}
          width={600}
          style={{ margin: "0 auto" }}
        >
          <Grid item>
            <img
              src={require("../images/datosBancarios.png").default}
              style={{ width: "100%" }}
              alt="Image 1"
            />
          </Grid>
          <Grid item textAlign="center">
            <Typography>MONTO A PAGAR: {data.montoPago}</Typography>
          </Grid>
          <Grid
            item
            textAlign="center"
            width={200}
            style={{ margin: "0 auto" }}
          >
            {qr}
          </Grid>
          <Grid item textAlign="center">
            <Typography>
              La vigencia de este pase de caja es de 3 días hábiles
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
