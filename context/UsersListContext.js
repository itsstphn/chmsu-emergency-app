import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { createContext, useEffect } from "react";
import { useReducer, useState } from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "./../hooks/useAuthContext";

export const UsersListContext = createContext();

export const UsersListContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  console.log("usersListContext is opened");

  useEffect(() => {
    let abortController = new AbortController();
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      // console.log("querySnapshot at context:", querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        setUsersList((prev) => {
          return [...prev, doc.data()];
        });
      });
    };
    fetchUsers();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <UsersListContext.Provider value={{ usersList }}>
      {children}
    </UsersListContext.Provider>
  );
};
