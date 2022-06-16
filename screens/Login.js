import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import logo from "../assets/images/chmsu-logo.jpg";
import { COLORS, FONTS } from "./../constants/theme";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let loginAttempt = 0;

  const handleLoginPress = () => {
    if (loginAttempt === 0) {
      Alert.alert(
        "Wrong password sa pagkabigaon mo",
        "Oh what happen \nAre you krissy? paakyuu"
      );
      loginAttempt++;
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <StatusBar></StatusBar>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={logo}></Image>
      </View>
      <View>
        <Text style={styles.appName}>
          CHMSU - BINALBAGAN{"\n"}Emergency{"\n"}Response
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="Username"
          style={styles.formInput}
        ></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.formInput}
        ></TextInput>
        <View style={styles.outerButton}>
          <Pressable
            android_ripple={{ color: "#140152" }}
            style={styles.innerButton}
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          A Capstone Project by Bless Sumagaysay, Micah Limaco, and Leonardo Da
          Vinci
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    overflow: "hidden",
    margin: 100,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: 28,
    lineHeight: 40,
    color: COLORS.primary,
  },
  formContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
  formInput: {
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    elevation: 3,
  },
  outerButton: {
    margin: 20,
    width: 110,

    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
  innerButton: {
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  buttonText: {
    color: "#fff",
    fontFamily: FONTS.semiBold,
    textAlign: "center",
  },
  forgot: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
  },
  footer: {
    marginTop: "auto",
    width: "80%",
    marginBottom: 10,
  },
  footerText: {
    textAlign: "center",
    fontFamily: FONTS.light,
    fontSize: 12,
    color: COLORS.primary,
  },
});
