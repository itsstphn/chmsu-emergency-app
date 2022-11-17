import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useUserDataContext } from "./useUserDataContext";

export const useSignout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: userDataDispatch } = useUserDataContext();

  const signout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth);

      console.log("has logged out");
      authDispatch({ type: "SIGNOUT" });
      userDataDispatch({ type: "SIGNOUT" });

      !isCancelled && setIsPending(false);
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  });

  return { signout, error, isPending };
};
