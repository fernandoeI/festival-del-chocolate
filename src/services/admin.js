import moment from "moment";
import "moment/locale/es-mx";
import { v4 as uuid4 } from "uuid";
import {
  collection,
  getFirestore,
  query,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../utils/server/firebase";

const db = getFirestore(app);

export const saveFeedback = async (data, requestId) => {
  const createAt = moment().unix();
  const docRef = doc(db, "request", requestId);
  await updateDoc(docRef, {
    feedbacks: arrayUnion({
      ...data,
      createAt,
      id: uuid4(),
    }),
  });
};

export const getRequests = async () => {
  const q = query(collection(db, "request"));
  let docData = [];
  onSnapshot(q, (querySnapshot) => {
    console.log(
      "🚀 ~ file: admin.js ~ line 34 ~ snapshot ~ querySnapshot",
      querySnapshot
    );
    // snapshot.forEach((doc) => {
    //   docData.push({ ...doc.data(), id: doc.id });
    // });
  });

  return docData;
};

export const assignReviewer = async (requestId, reviewer) => {
  const docRef = doc(db, "request", requestId);
  await updateDoc(docRef, {
    reviewer: reviewer,
  });
};
