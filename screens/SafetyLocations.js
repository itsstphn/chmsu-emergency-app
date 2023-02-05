import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import PageHeader from "./../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import MapView from "react-native-maps";
import ImageViewer from "react-native-image-zoom-viewer";
import { useUserDataContext } from "../hooks/useUserDataContext";

const GOOGLE_MAPS_API = "AIzaSyDVgCb2U7W0rRWPdI4fcP01rMd4iEFjQvk";

const SafetyLocations = ({ navigation }) => {
  const { location } = useUserDataContext();
  const images = ["Fire and Typhoon", "Earthquake"];
  const [index, setIndex] = React.useState(0);

  console.log("location: ", location);

  // const mapsPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=10.173429012304776,122.85543777373755&zoom=17&size=500x1000&maptype=satellite&markers=color:blue%7Clabel:S%7C10.174286594661696,-122.85442503099087&key=${GOOGLE_MAPS_API}`;

  const image = [
    {
      url: "",
      height: "100%",
      props: { source: require("../assets/images/blueprint-1.gif") },
    },
    {
      url: "",
      height: "100%",
      props: { source: require("../assets/images/blueprint-2.gif") },
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
          <Text style={styles.colorText}>
            {" "}
            - Safe Location/s for {images[index]}
          </Text>
        </View>
        <View style={styles.item}>
          <FontAwesomeIcon
            style={[styles.colorIcon, { color: "grey" }]}
            icon={faCircleInfo}
            size={12}
          ></FontAwesomeIcon>
          <Text style={styles.colorTextInfo}> - Swipe image </Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <ImageViewer
          onChange={(index) => setIndex(index)}
          saveToLocalByLongPress={false}
          imageUrls={image}
        ></ImageViewer>
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
    backgroundColor: "#fff",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  colorText: {
    fontFamily: FONTS.regular,
  },
  colorTextInfo: {
    fontSize: 12,
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
