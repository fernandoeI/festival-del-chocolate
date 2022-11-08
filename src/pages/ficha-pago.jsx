import React from "react";
import { useSearchParam } from "react-use";

const FichaPago = () => {
  const nombre = useSearchParam("nombre");
  const rfc = useSearchParam("rfc");
  const empresa = useSearchParam("empresa");
  const municipio = useSearchParam("municipio");
  const noMetros = useSearchParam("noMetros");
  const costoM2 = useSearchParam("costoM2");
  const montoPago = useSearchParam("montoPago");

  return (
    <div>
      Nombre del expositor: {nombre}
      <br />
      RFC: {rfc}
      <br />
      EMPRESA: {empresa}
      <br />
      MUNICIPIO: {municipio}
      <br />
      No. METROS CUADRADOS: {noMetros}
      <br />
      COSTO POR M2: {costoM2}
      <br />
      MONTO A PAGAR: {montoPago}
      <br />
    </div>
  );
};

export default FichaPago;
