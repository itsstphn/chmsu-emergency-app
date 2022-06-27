import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import PageHeader from "./../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const SafetyLocations = ({ navigation }) => {
  return (
    <View style={styles.safetyContainer}>
      <PageHeader
        navigation={navigation}
        pageTitle="Safety Locations"
        textColor={COLORS.primary}
        rippleColor={"#ccc"}
      ></PageHeader>
      <View style={styles.legendContainer}>
        <View style={styles.item}>
          <FontAwesomeIcon
            style={[styles.colorIcon, { color: "green" }]}
            icon={faDotCircle}
          ></FontAwesomeIcon>
          <Text style={styles.colorText}> - Safe Locations </Text>
        </View>
        <View style={styles.item}>
          <FontAwesomeIcon
            style={[styles.colorIcon, { color: "red" }]}
            icon={faDotCircle}
          ></FontAwesomeIcon>
          <Text style={styles.colorText}> - Dangerous Locations </Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <Image
          resizeMode="cover"
          style={styles.map}
          source={require("../assets/images/schoolmap.jpg")}
        ></Image>
      </View>
    </View>
  );
};

export default SafetyLocations;

const styles = StyleSheet.create({
  safetyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: COLORS.secondary,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  colorText: {
    fontFamily: FONTS.regular,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 30,

    margin: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
