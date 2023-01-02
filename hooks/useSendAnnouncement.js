import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import useDate from "./useDate";
import { useUsersListContext } from "./useUsersListContext";

export const useSendAnnouncement = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { usersList } = useUsersListContext();

  console.log("users: ", usersList);

  const numbers = usersList.map(
    (user) => user.userType === "student" && user.mobileNumber
  );

  const filteredNumbers = Array.from(new Set(numbers));

  console.log("fitlered nums: ", filteredNumbers);

  console.log("numbers ", numbers.length);

  const { timestamp } = useDate();

  const sendAnnouncement = async (message) => {
    try {
      await axios
        .all(
          ...filteredNumbers.map((number) =>
            axios.post(
              "http://localhost:8080/v1/sms/",
              `phone=${number}&message=${message + "\n" + timestamp}`,
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
          )
        )
        .then(
          axios.spread((...responses) => {
            console.log("res1:", responses[0]);
            console.log("res2:", responses[1]);
            console.log("res3:", responses[2]);
          })
        );
    } catch (err) {
      console.log(err);
    }

    try {
      await setDoc(doc(db, "announcements", timestamp), {
        message,
        timestamp,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { numbers, sendAnnouncement };
};
