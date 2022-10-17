import { Upload } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
} from "@mui/material";
import React from "react";
import { FILES } from "../../utils/constants";
import FileSelector from "./FileSelector";

const SelectDocumentsForm = ({
  open,
  setOpen,
  documents,
  setDocuments,
  currentsDoc,
  handleSubmit,
  uploading,
}) => {
  const getFileSelectorValue = (name) => {
    if (name) return documents.find((doc) => doc.name === name);
    return undefined;
  };

  const handleChange = (file, type) => {
    const selectedDocs = documents;
    const found = selectedDocs.findIndex((doc) => doc.type === type.name);

    if (found !== -1) selectedDocs.splice(found, 1);

    selectedDocs.push({ file, type: type.name, code: type.code });
    setDocuments([...selectedDocs]);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
      <DialogContent>
        <Grid item container spacing={2}>
          {FILES.map((file, key) => (
            <Grid key={key} item xs={12} sm={6} md={4} container>
              <FileSelector
                label={file.name}
                onChange={(item) => handleChange(item, file)}
                value={getFileSelectorValue(file.name)}
                currentDoc={currentsDoc.find((doc) =>
                  doc.split("/")[7].includes(`F${file.code}`)
                )}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={uploading}
              startIcon={
                !uploading ? (
                  <Upload />
                ) : (
                  <CircularProgress size={25} color="inherit" />
                )
              }
              onClick={handleSubmit}
            >
              Subir documentos
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default SelectDocumentsForm;
