import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../constants/theme";
import { FONTS } from "./../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import InputLocation from "./../components/InputLocation";

const Helpme = ({ navigation }) => {
  const [selectBuilding, setSelectBuilding] = useState(true);

  return (
    <View style={styles.helpContainer}>
      <PageHeader
        rippleColor={COLORS.ripplePrimary}
        pageTitle="Help Me"
        textColor={"#fff"}
        navigation={navigation}
      ></PageHeader>
      <View style={styles.actionSection}>
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
          <Text style={styles.actionText}>Call NDRRMO</Text>
        </View>

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
