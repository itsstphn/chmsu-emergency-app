import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error("UseContext must be inside AuthContextProvider");
  }

  return context;
};
