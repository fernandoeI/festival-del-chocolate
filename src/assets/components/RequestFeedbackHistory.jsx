import React from "react";
import { List, ListItem, ListItemText, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const RequestFeedbackHistory = () => {
  return (
    <Grid container bgcolor={grey[100]} borderRadius={1}>
      <Grid item container direction="column" spacing={2} padding={2}>
        <Grid item>
          <Typography marginBottom={2} color="primary">
            Historial de observaciones
          </Typography>
        </Grid>
        <Grid item>
          <List dense disablePadding>
            {/* <ListItem>
              <ListItemText primary={"holi"} />
            </ListItem> */}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RequestFeedbackHistory;
