import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  query,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../utils/server/firebase";
import { getRequests } from "../services/admin";

const db = getFirestore(app);

export const RequestContext = React.createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [requestSelected, setRequestSelected] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      setRequests(await getRequests());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const q = query(collection(db, "request"));
      onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRequests(data);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      if (requestSelected) {
        const found = requests.find(
          (request) => request.id === requestSelected.id
        );
        if (found) setRequestSelected(found);
      }
    };
    fetchData();
  }, [requests]);

  return (
    <RequestContext.Provider
      value={{
        requests,
        loading,
        setRequestSelected,
        requestSelected,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};
