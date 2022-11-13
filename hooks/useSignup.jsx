import { auth, db } from "../firebase/config";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, mobileNumber, email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(response.user, { displayName: firstName });
      const docRef = doc(db, "users", response.user.uid);

      await setDoc(docRef, {
        userType: "student",
        email,
        firstName,
        lastName,
        mobileNumber,
      });

      dispatch({ type: "SIGNIN", payload: response.user });
      // if (isAdmin) dispatch({ type: "SET_ADMIN" });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
