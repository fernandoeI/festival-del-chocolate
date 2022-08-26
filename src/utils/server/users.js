import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getUsers };
