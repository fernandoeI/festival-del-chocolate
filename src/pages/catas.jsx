import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const Catas = () => {
  useEffect(() => {
    const redirect = () => {
      window.location.href = "https://registro-6cead.web.app/";
    };
    redirect();
  }, []);

  return <Typography>Cargando...</Typography>;
};

export default Catas;
