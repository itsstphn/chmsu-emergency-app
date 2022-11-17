import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/theme";
import { FONTS } from "./../../constants/theme";

const CreateAnnouncement = () => {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const handleSendPress = () => {
    setDisplayMessage(message);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.form}>
        <Text style={styles.headerText}>Create Announcement</Text>
        <TextInput
          multiline
          numberOfLines={5}
          style={styles.textInput}
          placeholder="Put your message here..."
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
        <Text>{displayMessage}</Text>
      </View>
    </View>
  );
};

export default CreateAnnouncement;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  textInput: {
    padding: 5,
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
});
