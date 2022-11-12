import React, { useRef, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import RequestInformation from "./RequestInformation";
import { grey } from "@mui/material/colors";
import { v4 } from "uuid";
import {
  getLastAceptedStatus,
  getLastFeedback,
  getLastStatus,
  getQRValue,
  getStatusColor,
} from "../../utils/functions";
import { FiberManualRecord, Upgrade } from "@mui/icons-material";
import { ACEPT, NEED_MODIFY } from "../../utils/constants";
import SelectDocumentsForm from "./SelectDocumentsForm";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../../utils/server/firebase";

import emailjs from "@emailjs/browser";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import { QRCodeSVG } from "qrcode.react";

const db = getFirestore(app);

const RequestCardInformation = ({ request }) => {
  const status = getLastStatus(request);
  const lastAccepted = getLastAceptedStatus(request.feedbacks);
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const componentRef = useRef();

  const handleSubmit = async () => {
    try {
      setUploading(true);

      const newDocsUrl = [];
      const storage = getStorage();
      const today = new Date(Date.now())
        .toLocaleDateString()
        .replace(/\//g, "");

      const uploadPromises = documents.map(async (item) => {
        const documentRef = ref(
          storage,
          `docs/${request.rfc.toUpperCase()}/${item.code}_${today}_${v4()}.pdf`
        );
        const snapshot = await uploadBytes(documentRef, item.file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        newDocsUrl.push(downloadURL);
      });

      await Promise.all(uploadPromises);

      let newRequestDocuments = [...request.documents];

      documents.forEach((doc) => {
        const foundIndex = newRequestDocuments.findIndex((reqDoc) => {
          return reqDoc.split("/")[7].includes(`F${doc.code}`);
        });
        if (foundIndex !== -1) newRequestDocuments.splice(foundIndex, 1);
      });

      newRequestDocuments = [...newRequestDocuments, ...newDocsUrl];

      const docRef = doc(db, "request", request.id);
      await updateDoc(docRef, {
        documents: newRequestDocuments,
      });

      toast.success("Documentos actualizados. La página se recargará.");
      await emailjs.send(
        "service_q44o3po",
        "template_gn80i6k",
        {
          name: request?.nombre,
          empresa: request?.empresa,
          folio: request?.folio,
        },
        "s8gxbtmds2srypNlQ"
      );
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      toast.error(
        "Hubo un problema al subir tus documentos. Recargue e intente de nuevo."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        border={`1px solid ${grey[400]}`}
        borderRadius={2}
        paddingX={2}
        paddingTop={1}
        paddingBottom={3}
        marginTop={4}
      >
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation title="Folio" description={request.folio} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation title="Contacto" description={request.nombre} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation title="Empresa" description={request.empresa} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation title="RFC" description={request.rfc} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation
            title="Estatus"
            description={
              <div style={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecord
                  fontSize="small"
                  style={{
                    marginRight: 6,
                    color: getStatusColor(status),
                  }}
                />
                {status}
              </div>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <RequestInformation
            title="Observaciones"
            description={getLastFeedback(request)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RequestInformation
            title="Fecha de registro"
            description={request.createAt.toDate().toLocaleDateString("es-MX")}
          />
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <Button
            size="large"
            variant="outlined"
            disabled={status !== NEED_MODIFY}
            color="primary"
            startIcon={<Upgrade />}
            onClick={() => setOpen(true)}
          >
            Modificar documentos
          </Button>
        </Grid>

        {status === ACEPT ? (
          <>
            <ReactToPrint
              trigger={() => (
                <Button color="primary" variant="contained">
                  Descargar pase de caja
                </Button>
              )}
              content={() => componentRef.current}
            />

            <div style={{ display: "none" }}>
              <ComponentToPrint
                ref={componentRef}
                data={{
                  ...request,
                  noMetros: lastAccepted.squareMeter,
                  costoM2: lastAccepted.pricePerMeter,
                  montoPago: lastAccepted.total,
                }}
                qr={
                  <QRCodeSVG
                    value={getQRValue({
                      nombre: request.nombre,
                      rfc: request.rfc,
                      empresa: request.empresa,
                      municipio: request.municipio,
                      noMetros: lastAccepted.squareMeter,
                      costoM2: lastAccepted.pricePerMeter,
                      montoPago: lastAccepted.total,
                    })}
                  />
                }
              />
            </div>
          </>
        ) : null}

        <Grid item xs={12}>
          <Typography fontWeight="bold">
            Consulta los{" "}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FLineamientos%20%202022.pdf?alt=media&token=8c5e7644-6ced-45ca-bfd6-ea1bf7775069"
              target="_blank"
              rel="noopener noreferer"
            >
              lineamientos
            </a>{" "}
            para el funcionamiento del Festival del Chocolate 2022
          </Typography>
        </Grid>
      </Grid>

      <SelectDocumentsForm
        open={open}
        setOpen={setOpen}
        documents={documents}
        setDocuments={setDocuments}
        currentsDoc={request.documents}
        handleSubmit={handleSubmit}
        uploading={uploading}
      />
    </>
  );
};

export default RequestCardInformation;
