import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
  ImageBackground,
  // StatusBar,
} from "react-native";
import logo from "../assets/images/chmsu-logo.jpg";
import { COLORS, FONTS } from "./../constants/theme";
import { StatusBar } from "expo-status-bar";
import bgImg from "../assets/images/bg.jpg";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let loginAttempt = 0;

  const handleLoginPress = () => {
    if (loginAttempt === 0) {
      Alert.alert("Wrong username or password", "Please try again", [
        {
          text: "Ok fine",
        },
      ]);
      loginAttempt++;
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <StatusBar style="auto"></StatusBar>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.bgImg}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={logo}
          ></Image>
        </View>
        <View>
          <Text style={styles.appName}>
            Welcome to CHMSU - Binalbagan{"\n"}
          </Text>
          <Text style={styles.appNamePrimary}>EMERGENCY</Text>
          <Text style={styles.appNamePrimary2}>RESPONSE</Text>
        </View>
      </ImageBackground>

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
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View style={styles.outerButton}>
          <Pressable
            android_ripple={{ color: COLORS.ripplePrimary }}
            style={styles.innerButton}
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>
          A Capstone Project by Bless Sumagaysay, Micah Limaco, and Chris
          Fernandez
        </Text>
      </View> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "white",
  },
  bgImg: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: "hidden",
    marginTop: 80,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  appName: {
    fontFamily: FONTS.light,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 20,
    color: "#000",
  },
  appNamePrimary: {
    textAlign: "center",
    fontFamily: FONTS.bold,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
    fontSize: 25,
    lineHeight: 25,
    marginTop: -20,
    elevation: 3,
  },
  appNamePrimary2: {
    textAlign: "center",
    fontFamily: FONTS.bold,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 8 },
    textShadowRadius: 10,
    fontSize: 40,
    lineHeight: 40,
  },
  formContainer: {
    marginVertical: 30,
    width: 340,
    height: 235,
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: -80,
    elevation: 5,
  },
  formInput: {
    width: 280,
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    fontSize: 14,
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
    fontSize: 15,
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
