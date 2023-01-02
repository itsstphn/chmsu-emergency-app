import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import useDate from "../hooks/useDate";
import { useUserDataContext } from "../hooks/useUserDataContext";
import useWeather from "./../hooks/useWeather";

const HomeHeader = () => {
  const { day, month, date } = useDate();

  const { weather } = useWeather();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerText]}>CHMSU{"\n"}BINALBAGAN</Text>
        <Text style={[styles.headerText, { fontSize: 25 }]}>
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
        <Text style={styles.weatherText}>{weather?.desc}</Text>

        <Text style={[styles.weatherText, { fontSize: 25 }]}>
          {weather?.temp}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
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
