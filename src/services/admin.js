import moment from "moment";
import "moment/locale/es-mx";
import { v4 as uuid4 } from "uuid";
import { getFirestore, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { app } from "../utils/server/firebase";
import { ACEPT } from "../utils/constants";

const db = getFirestore(app);

export const saveFeedback = async (data, request) => {
  const createAt = moment().unix();
  const docRef = doc(db, "request", request.id);

  const feedback = {
    status: data.status,
    observations: data.observations,
  };

  if (data.status === ACEPT) {
    feedback.squareMeter = data.squareMeter;
    feedback.pricePerMeter = data.pricePerMeter;
    feedback.total = data.total;
  }

  await updateDoc(docRef, {
    feedbacks: arrayUnion({
      ...feedback,
      createAt,
      id: uuid4(),
    }),
  });
};

export const assignReviewer = async (requestId, reviewer) => {
  const docRef = doc(db, "request", requestId);
  await updateDoc(docRef, {
    reviewer: reviewer,
  });
};
