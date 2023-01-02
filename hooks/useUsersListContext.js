import { useContext } from "react";
import { UsersListContext } from "../context/UsersListContext";

export const useUsersListContext = () => {
  const context = useContext(UsersListContext);

  if (!context) {
    throw new Error("UseContext must be inside UsersListContextProvider");
  }

  return context;
};
