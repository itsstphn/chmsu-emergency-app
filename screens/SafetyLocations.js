import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import PageHeader from "./../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import MapView from "react-native-maps";
import ImageViewer from "react-native-image-zoom-viewer";
import { useUserDataContext } from "../hooks/useUserDataContext";

const GOOGLE_MAPS_API = "AIzaSyDVgCb2U7W0rRWPdI4fcP01rMd4iEFjQvk";

const SafetyLocations = ({ navigation }) => {
  const { location } = useUserDataContext();

  console.log("location: ", location);

  // const mapsPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=10.173429012304776,122.85543777373755&zoom=17&size=500x1000&maptype=satellite&markers=color:blue%7Clabel:S%7C10.174286594661696,-122.85442503099087&key=${GOOGLE_MAPS_API}`;

  const image = [
    {
      url: "",
      height: "100%",
      props: { source: require("../assets/images/blueprint.jpg") },
    },
  ];

  // console.log("map", mapsPreviewUrl);

  return (
    <View style={styles.safetyContainer}>
      <PageHeader
        navigation={navigation}
        pageTitle="Safety Locations"
        textColor={COLORS.primary}
        rippleColor={"#ccc"}
        home="Home"
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
        <ImageViewer imageUrls={image}></ImageViewer>
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
