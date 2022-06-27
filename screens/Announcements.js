import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import PageHeader from "./../components/PageHeader";

const Announcements = ({ navigation }) => {
  return (
    <View style={styles.announcementsContainer}>
      <PageHeader
        navigation={navigation}
        textColor={COLORS.primary}
        pageTitle="2 Announcements"
        rippleColor={COLORS.rippleSecondary}
      ></PageHeader>
      <View style={styles.announcements}>
        <View style={styles.item}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              No classes for tomorrow, August 15, 2022, nationwide due to
              typhoon Odette 2.0
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsSource}>-NDRRMO</Text>
            <Text style={styles.detailsTime}>2 hours ago</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              The school will be holding an annual earthquake drill next week,
              August 20, 2022. Perfect attendance is expected.
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsSource}>-NDRRMO</Text>
            <Text style={styles.detailsTime}>6 hours ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Announcements;

const styles = StyleSheet.create({
  announcementsContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondary,
  },
  announcements: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    height: 120,
    marginBottom: 20,
    width: 340,
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    overflow: "hidden",
  },
  messageContainer: {
    width: "100%",
  },
  message: {
    fontFamily: FONTS.regular,
    color: "#fff",
    width: "100%",
    textAlign: "justify",
  },
  details: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: COLORS.ripplePrimary,
  },
  detailsSource: {
    fontFamily: FONTS.regular,
    color: "#eee",
  },
  detailsTime: {
    fontFamily: FONTS.regular,
    color: "#eee",
    fontSize: 12,
  },
});
