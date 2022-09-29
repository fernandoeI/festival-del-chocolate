import React, { useEffect, useState } from "react";
import {
  List,
  Grid,
  Typography,
  ListItemText,
  ListItem,
  CircularProgress,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";
import "moment/locale/es-mx";
import { getStatusColor } from "../../utils/functions";
import { FiberManualRecord } from "@mui/icons-material";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../../utils/server/firebase";

const db = getFirestore(app);

const RequestFeedbackHistory = ({ requestId }) => {
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        const unsub = onSnapshot(doc(db, "request", requestId), (doc) => {
          const data = doc.data();
          console.log(data.feedbacks);
          setFeedbacks(data.feedbacks);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container bgcolor={grey[100]} borderRadius={1}>
      <Grid item container direction="column" spacing={1} padding={2}>
        <Grid item marginBottom={2}>
          <Typography color="primary">Historial de observaciones</Typography>
          <Typography variant="caption" color="GrayText">
            El listado está ordenado empezando por el registro más reciente.
            Actualizado a la fecha {moment().format("DD/MM/YYYY")}
          </Typography>
        </Grid>
        <Grid item>
          {loading ? <CircularProgress size={50} color="primary" /> : null}

          {!loading && feedbacks.length <= 0 ? (
            <Typography>No hay historial a mostrar de momento</Typography>
          ) : null}

          {!loading && feedbacks.length > 0 ? (
            <List dense disablePadding>
              {feedbacks
                .sort((a, b) => {
                  const dateA = moment.utc(a.createAt * 1000);
                  const dateB = moment.utc(b.createAt * 1000);
                  if (dateA > dateB) return -1;
                  if (dateA < dateB) return 1;
                  return 0;
                })
                .map((feedback, key) => (
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
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RequestFeedbackHistory;
