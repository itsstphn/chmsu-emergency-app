import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const PageHeader = ({
  navigation,
  home,
  rippleColor = "grey",
  pageTitle,
  textColor,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.outerBackButton}>
        <Pressable
          onPress={() => navigation.navigate(home)}
          android_ripple={{ color: rippleColor }}
          style={styles.innerBackButton}
        >
          <FontAwesomeIcon
            style={{ color: textColor }}
            size={25}
            icon={faArrowLeft}
          ></FontAwesomeIcon>
        </Pressable>
      </View>
      <Text style={[styles.pageTitle, { color: textColor }]}>{pageTitle}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
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

  pageTitle: {
    fontFamily: FONTS.bold,

    fontSize: 28,
  },
});
