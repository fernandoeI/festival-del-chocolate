import React, { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { toast } from "react-toastify";

const useStyles = makeStyles({
  root: {
    margin: "20px 0",

    "& div:nth-child(2)": {
      marginTop: 10,

      "& .MuiIconButton-root": {
        marginLeft: 10,
      },
    },
  },
  fileName: {
    maxWidth: 150,
    textOverflow: "ellipsis",
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

const FileSelector = ({
  value,
  label,
  selectionButtonText,
  required = false,
  onChange,
}) => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const [file, setFile] = useState(value);

  const handleClick = () => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  };

  const handleChange = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      const file = fileList[0];
      if (file.type !== "application/pdf")
        return toast.error("Solo de admiten documentos en formato PDF");
      setFile(file);
      if (onChange) onChange(file);
    }
  };

  return (
    <div className={classes.root}>
      {label && <Typography color="textSecondary">{label}</Typography>}
      <div>
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          onClick={handleClick}
        >
          {selectionButtonText || "Seleccionar documento"}
        </Button>

        {file && (
          <Typography
            className={classes.fileName}
            variant="caption"
            color="textSecondary"
          >
            {file.name}
          </Typography>
        )}
      </div>
      <input
        required={required}
        onChange={handleChange}
        ref={inputRef}
        type="file"
        hidden
        accept=".pdf"
      />
    </div>
  );
};

export default FileSelector;
