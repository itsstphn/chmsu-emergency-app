import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../constants/theme";
import { FONTS } from "./../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Helpme = ({ navigation }) => {
  return (
    <View style={styles.helpContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.outerBackButton}>
          <Pressable
            onPress={() => navigation.goBack()}
            android_ripple={{ color: COLORS.ripplePrimary }}
            style={styles.innerBackButton}
          >
            <FontAwesomeIcon
              style={styles.iconBackButton}
              size={25}
              icon={faArrowLeft}
            ></FontAwesomeIcon>
          </Pressable>
        </View>
        <Text style={styles.pageTitle}>Help Me</Text>
      </View>
      <View style={styles.mainSection}>
        <View style={styles.actionsContainer}>
          <View style={styles.outerActionButton}>
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={styles.innerActionButton}
            >
              <FontAwesomeIcon
                style={styles.icon}
                size={50}
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
                size={50}
                icon={faMessage}
              ></FontAwesomeIcon>
            </Pressable>
          </View>
          <Text style={styles.actionText}>Message NDRRMO</Text>
        </View>
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
  },
  headerContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  outerBackButton: {
    marginLeft: -20,
    overflow: "hidden",

    width: 60,
    height: 60,

    borderRadius: 60 / 2,
  },
  innerBackButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackButton: {
    color: "#fff",
  },
  pageTitle: {
    fontFamily: FONTS.bold,
    color: "#fff",
    fontSize: 28,
  },
  mainSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  outerActionButton: {
    height: 140,
    width: 140,
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
    fontSize: 18,
  },
});
