import moment from "moment/moment";
import React from "react";

const useDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let date = d.getDate();
  let month = months[d.getMonth()];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timestamp = moment().format("MMM D, YYYY, h:mm:ss a");

  let day = days[d.getDay()];

  return { day, month, date, timestamp };
};

export default useDate;
