import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

const HomeHeader = () => {
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

  let day = days[d.getDay()];
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerText]}>CHMSU{"\n"}BINALBAGAN</Text>
        <Text style={[styles.headerText, { fontSize: 29 }]}>
          EMERGENCY RESPONSE
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <FontAwesomeIcon
          style={{ color: COLORS.primary }}
          size={60}
          icon={faCloudSun}
        />
        <Text style={styles.weatherText}>
          {day}, {month} {date}
        </Text>
        <Text style={styles.weatherText}>Enclaro, Mostly Cloudy</Text>

        <Text style={[styles.weatherText, { fontSize: 25 }]}>30°C</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    height: 150,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  headerTextContainer: {
    width: "60%",
    textAlign: "center",
  },
  headerText: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.primary,
  },
  weatherContainer: {
    flex: 1,
    width: "40%",

    alignItems: "flex-end",
  },
  weatherText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 10,
  },
});
