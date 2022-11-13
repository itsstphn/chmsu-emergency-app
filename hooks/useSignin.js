import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useSignin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "SIGNIN", payload: response.user });

      if (response.user) {
        const docRef = doc(db, "users", response.user.uid);
        const responseDoc = await getDoc(docRef);
        const userType = responseDoc.data().userType;

        dispatch({ type: "SET_USERTYPE", payload: userType });
      }

      !isCancelled && setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.code);
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signin };
};

export default useSignin;
