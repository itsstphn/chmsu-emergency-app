import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { createContext, useEffect } from "react";
import { useReducer, useState } from "react";
import { db } from "../firebase/config";

import * as Location from "expo-location";
import { useAuthContext } from "./../hooks/useAuthContext";
import { Alert } from "react-native";

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
      return { ...state, name: null };
    default:
      return state;
  }
};

export const UserDataContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [state, dispatch] = useReducer(userDataReducer, {
    name: null,
    location: null,
    mobileNumber: null,
    email: null,
  });

  useEffect(() => {
    // let abortController = new AbortController();

    (async () => {
      if (user) {
        // firebase user data
        try {
          const docRef = doc(db, "users", user.uid);
          const unsub = await onSnapshot(docRef, (response) => {
            const firstName = response?.data().firstName;
            const lastName = response?.data().lastName;
            const mobileNumber = response?.data().mobileNumber;
            const email = response?.data().mobileNumber;
            dispatch({ type: "SET_NAME", payload: { firstName, lastName } });
            console.log("response at context:", firstName, lastName);
            dispatch({
              type: "SET_USER_DETAILS",
              payload: { mobileNumber, email },
            });
          });
          return () => unsub();
        } catch (error) {
          console.log(error);
        }

        // location
      }
    })();
    // return () => {
    //   abortController.abort();
    // };
  }, [user]);

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });

      address.length !== 0 &&
        dispatch({
          type: "SET_LOCATION",
          payload: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            address: address[0],
          },
        });
    };
    fetchLocation();
  }, []);

  return (
    <UserDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
