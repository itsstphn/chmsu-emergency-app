import { collection, getDocs } from "firebase/firestore";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { db } from "../firebase/config";
import PageHeader from "./../components/PageHeader";

const Announcements = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const getAnnouncements = async () => {
      const querySnapshot = await getDocs(collection(db, "announcements"));

      const data = [];

      querySnapshot.forEach((doc) => {
        // setAnnouncements((prev) => [...prev, doc.data()]);
        data.push(doc.data());
        // console.log(doc.data());
      });

      setAnnouncements(_.reverse(data));

      return data;
    };
    getAnnouncements();
  }, []);

  // const announcements = getAnnouncements().then(res => );

  // console.log(announcements);

  const renderedItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsSource}>-CHMSU</Text>
        <Text style={styles.detailsTime}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.announcementsContainer}>
      <PageHeader
        navigation={navigation}
        textColor={COLORS.primary}
        pageTitle="Announcements"
        rippleColor={COLORS.rippleSecondary}
        home="Home"
      ></PageHeader>
      <View style={styles.announcements}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={announcements}
          renderItem={renderedItem}
          keyExtractor={(item) => item.timestamp}
        ></FlatList>
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
    minHeight: 120,
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
    // height: "100%",
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
