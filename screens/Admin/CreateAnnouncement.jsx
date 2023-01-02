import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/theme";
import { FONTS } from "./../../constants/theme";
import axios from "axios";
import { useUsersListContext } from "../../hooks/useUsersListContext";
import moment from "moment/moment";
import useDate from "../../hooks/useDate";
import { useSendAnnouncement } from "./../../hooks/useSendAnnouncement";
import PageHeader from "../../components/PageHeader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import _ from "lodash";

const CreateAnnouncement = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const { usersList } = useUsersListContext();
  const { sendAnnouncement } = useSendAnnouncement();

  const handleSendPress = async () => {
    sendAnnouncement(message);
    setMessage("");
  };

  // const [announcements, setAnnouncements] = useState([]);

  // useEffect(() => {
  //   const getAnnouncements = async () => {
  //     const querySnapshot = await getDocs(collection(db, "announcements"));

  //     const data = [];

  //     querySnapshot.forEach((doc) => {
  //       // setAnnouncements((prev) => [...prev, doc.data()]);
  //       data.push(doc.data());
  //       // console.log(doc.data());
  //     });

  //     setAnnouncements(_.reverse(data));

  //     return data;
  //   };
  //   getAnnouncements();
  // }, []);

  // renderedItem = ({ item }) => (
  //   <View style={styles.item}>
  //     <View style={styles.messageContainer}>
  //       <Text style={styles.message}>{item.message}</Text>
  //     </View>
  //     <View style={styles.details}>
  //       <Text style={styles.detailsSource}>-CHMSU</Text>
  //       <Text style={styles.detailsTime}>{item.timestamp}</Text>
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <PageHeader
        navigation={navigation}
        home="HomeAdmin"
        pageTitle="Create Announcement"
        textColor={COLORS.primary}
      ></PageHeader>
      <View style={styles.form}>
        <TextInput
          multiline
          numberOfLines={5}
          style={styles.textInput}
          placeholder="Put your message here..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        ></TextInput>
        <View style={styles.outerSendButton}>
          <Pressable
            style={styles.innerSendButton}
            android_ripple={{ color: COLORS.ripplePrimary }}
            onPress={() => handleSendPress()}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={styles.announcements}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={announcements}
          renderItem={renderedItem}
          keyExtractor={(item) => item.timestamp}
        ></FlatList>
      </View> */}
    </View>
  );
};

export default CreateAnnouncement;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  textInput: {
    padding: 20,
    borderWidth: 2,
  },
  outerSendButton: {
    height: 40,
    width: 70,
    elevation: 5,
    overflow: "hidden",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    marginVertical: 10,
  },
  innerSendButton: {
    // padding: 10,
    // padding: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    fontFamily: FONTS.bold,
    color: "#fff",
  },
  // announcements: {
  //   alignItems: "center",
  // },
  // item: {
  //   height: 120,
  //   marginBottom: 20,
  //   width: 340,
  //   alignItems: "center",
  //   padding: 20,
  //   backgroundColor: COLORS.primary,
  //   borderRadius: 20,
  //   overflow: "hidden",
  // },
  // messageContainer: {
  //   width: "100%",
  // },
  // message: {
  //   fontFamily: FONTS.regular,
  //   color: "#fff",
  //   width: "100%",
  //   textAlign: "justify",
  // },
  // details: {
  //   flexDirection: "row",
  //   width: "100%",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: "auto",
  //   borderTopWidth: 1,
  //   borderTopColor: COLORS.ripplePrimary,
  // },
  // detailsSource: {
  //   fontFamily: FONTS.regular,
  //   color: "#eee",
  // },
  // detailsTime: {
  //   fontFamily: FONTS.regular,
  //   color: "#eee",
  //   fontSize: 12,
  // },
});
