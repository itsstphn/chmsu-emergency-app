import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect } from "react";
import { useReducer, useState } from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "./../hooks/useAuthContext";

export const UserDataContext = createContext();

const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SIGNOUT":
      return { ...state, name: null };
    default:
      return state;
  }
};

export const UserDataContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [state, dispatch] = useReducer(userDataReducer, {
    name: null,
  });

  useEffect(() => {
    let abortController = new AbortController();
    (async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const response = await getDoc(docRef);
        const firstName = response.data().firstName;
        const lastName = response.data().lastName;
        dispatch({ type: "SET_NAME", payload: { firstName, lastName } });
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <UserDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
