import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../constants/theme";
import { FONTS } from "../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import InputLocation from "../components/InputLocation";
import useDate from "./../hooks/useDate";
import { useUserDataContext } from "./../hooks/useUserDataContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment/moment";

const Helpme = ({ navigation }) => {
  const { user } = useAuthContext();
  const { mobileNumber, name, location } = useUserDataContext();

  const { firstName, lastName } = name;

  // `https://maps.googleapis.com/maps/api/staticmap?center=10.173615,122.855334&zoom=18&size=330x1200&maptype=satellite&markers=color:red%7Clabel:S%7C${location.latitude},${location.longitude}&key=AIzaSyDVgCb2U7W0rRWPdI4fcP01rMd4iEFjQvk`

  const locationUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=18&size=330x1200&maptype=satellite&markers=color:red%7Clabel:S%7C${location.latitude},${location.longitude}&key=AIzaSyDVgCb2U7W0rRWPdI4fcP01rMd4iEFjQvk`
    : null;

 

  const { timestamp } = useDate();

  useEffect(() => {
    const sendLocation = async () => {
      if (location === null) return;
      await setDoc(doc(db, "SOS", user.uid), {
        name: firstName + " " + lastName,
        location: locationUrl,
        mobileNumber,
        timestamp,
        show: true,
        month: moment().format("MMMM"),
      });
    };

    sendLocation();
  }, []);

  return (
    <View style={styles.helpContainer}>
      <PageHeader
        rippleColor={COLORS.ripplePrimary}
        pageTitle="Notifying NDRRMO"
        textColor={"#fff"}
        navigation={navigation}
        home="Home"
      ></PageHeader>
      <View style={styles.actionsContainer}>
        <View style={styles.outerActionButton}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={styles.innerActionButton}
          >
            <FontAwesomeIcon
              style={styles.icon}
              size={25}
              icon={faPhone}
            ></FontAwesomeIcon>
          </Pressable>
        </View>
        <Text style={styles.actionText}>Calling</Text>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.outerActionButton}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={styles.innerActionButton}
            onPress={() => navigation.navigate("Home")}
          >
            <FontAwesomeIcon
              style={[styles.icon, { color: "red" }]}
              size={25}
              icon={faPhone}
            ></FontAwesomeIcon>
          </Pressable>
        </View>
        <Text style={styles.actionText}>End Call</Text>
      </View>
    </View>
  );
};

export default Helpme;

const styles = StyleSheet.create({
  helpContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  iconBackButton: {
    color: "#fff",
  },
  pageTitle: {
    fontFamily: FONTS.bold,
    color: "#fff",
    fontSize: 28,
  },
  actionSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outerActionButton: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 140 / 2,
    overflow: "hidden",
    elevation: 2,
  },
  innerActionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: COLORS.primary,
  },
  actionText: {
    marginTop: 10,
    fontFamily: FONTS.semiBold,
    color: "#fff",
    fontSize: 14,
  },
  locationSection: {
    flex: 1,
    marginTop: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: FONTS.semiBold,
    margin: 10,
  },
});

{
  /* 
      <View style={styles.actionSection}>
        

        <View
          style={[styles.actionsContainer, { justifyContent: "flex-start" }]}
        >
          <View style={styles.outerActionButton}>
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={styles.innerActionButton}
            >
              <FontAwesomeIcon
                style={styles.icon}
                size={25}
                icon={faMessage}
              ></FontAwesomeIcon>
            </Pressable>
          </View>
          <Text style={styles.actionText}>Message NDRRMO</Text>
        </View>
      </View>
      <View style={styles.locationSection}>
        <Text style={styles.sectionTitle}>Your Location</Text>
        <InputLocation
          selectBuilding={selectBuilding}
          setSelectBuilding={setSelectBuilding}
        ></InputLocation>
      </View> */
}
