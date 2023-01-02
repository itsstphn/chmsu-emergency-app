import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect } from "react";
import { useReducer, useState } from "react";
import { db } from "../firebase/config";

import * as Location from "expo-location";
import { useAuthContext } from "./../hooks/useAuthContext";

export const UserDataContext = createContext();

const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_USER_DETAILS":
      return {
        ...state,
        mobileNumber: action.payload.mobileNumber,
        email: action.payload.email,
      };
    case "SIGNOUT":
      return { ...state, name: null, location: null };
    default:
      return state;
  }
};

export const UserDataContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  console.log("userDAta reached");

  const [state, dispatch] = useReducer(userDataReducer, {
    name: null,
    location: null,
    mobileNumber: null,
    email: null,
  });

  useEffect(() => {
    let abortController = new AbortController();

    (async () => {
      if (user) {
        // firebase user data
        const docRef = doc(db, "users", user.uid);
        const response = await getDoc(docRef);
        const firstName = response.data().firstName;
        const lastName = response.data().lastName;
        const mobileNumber = response.data().mobileNumber;
        const email = response.data().mobileNumber;
        dispatch({ type: "SET_NAME", payload: { firstName, lastName } });
        dispatch({
          type: "SET_USER_DETAILS",
          payload: { mobileNumber, email },
        });

        // location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          setIsLocationPending(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const address = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        dispatch({
          type: "SET_LOCATION",
          payload: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            address: address[0],
          },
        });
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
