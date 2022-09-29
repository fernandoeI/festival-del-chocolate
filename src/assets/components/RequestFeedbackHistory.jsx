import React from "react";
import { List, Grid, Typography, ListItemText, ListItem } from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";
import "moment/locale/es-mx";
import { getStatusColor } from "../../utils/functions";
import { FiberManualRecord } from "@mui/icons-material";

const RequestFeedbackHistory = ({ feedbacks }) => {
  return (
    <Grid container bgcolor={grey[100]} borderRadius={1}>
      <Grid item container direction="column" spacing={1} padding={2}>
        <Grid item>
          <Typography marginBottom={2} color="primary">
            Historial de observaciones
          </Typography>
        </Grid>
        <Grid item>
          <List dense disablePadding>
            {feedbacks.map((feedback, key) => (
              <ListItem key={key} disableGutters disablePadding divider>
                <ListItemText
                  primary={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FiberManualRecord
                        fontSize="small"
                        style={{
                          marginRight: 6,
                          color: getStatusColor(feedback.status),
                        }}
                      />
                      <Typography>{feedback.observations}</Typography>
                    </div>
                  }
                  secondary={
                    <>
                      {feedback.status}
                      {` — ${moment
                        .utc(feedback.createAt * 1000)
                        .format("MMMM DD, YYYY")}`}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RequestFeedbackHistory;
