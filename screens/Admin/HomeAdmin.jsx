import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "../../assets/images/chmsu-logo.jpg";
import headerBg from "../../assets/images/bg.jpg";
import list from "../../assets/images/list.png";
import monitor from "../../assets/images/monitor.png";
import map from "../../assets/images/map.png";
import notes from "../../assets/images/notes.png";
import { StatusBar } from "expo-status-bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCloudSun,
  faLocationDot,
  faLocationPin,
  faLocationPinLock,
  faMapLocation,
  faMapLocationDot,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSignout } from "./../../hooks/useSignout";
import useDate from "../../hooks/useDate";
import { COLORS } from "../../constants/theme";

const HomeAdmin = ({ navigation }) => {
  const { signout, error, isPending } = useSignout();
  const handleLogoutPress = () => {
    signout();
  };
  const { day, month, date } = useDate();
  return (
    <View style={styles.HomeAdmin}>
      <StatusBar style="auto"></StatusBar>
      <ImageBackground
        source={headerBg}
        resizeMode="cover"
        style={styles.headerBg}
        imageStyle={{
          transform: [{ rotate: "180deg" }],
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image resizeMode="cover" source={logo} style={styles.logo}></Image>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText1}>CHMSU - Bin</Text>
            <Text style={styles.headerText2}>EMERGENCY{"\n"}RESPONSE</Text>
          </View>
          <Pressable
            onPress={() => handleLogoutPress()}
            style={styles.logoutButton}
          >
            <Text>Admin{"\n"}Logout</Text>
            <FontAwesomeIcon
              style={styles.logoutIcon}
              size={25}
              icon={faRightFromBracket}
            ></FontAwesomeIcon>
          </Pressable>
        </View>
        <View style={styles.status}>
          <View style={styles.weatherIconContainer}>
            <FontAwesomeIcon
              style={styles.weatherIcon}
              size={40}
              icon={faCloudSun}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.weatherTextContainer}>
            <Text>{`${day}, ${month} ${date}`}</Text>
            <Text>Enclaro Mostly Cloudy 31°C</Text>
          </View>
        </View>
        <View style={styles.location}>
          <View style={styles.locationIconContainer}>
            <FontAwesomeIcon
              style={styles.locationIcon}
              size={35}
              icon={faLocationDot}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.locationTextContainer}>
            <Text>Baranggay Enclaro, Binalbagan City</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.main}>
        <Text style={styles.mainHeaderText}>Welcome Admin,</Text>
        <Text>Swipe for more.</Text>
        <ScrollView horizontal>
          <View style={styles.outerButton}>
            <Pressable
              style={styles.innerButton}
              android_ripple={{ color: COLORS.ripplePrimary }}
            >
              <ImageBackground
                resizeMode="contain"
                style={styles.buttonImage}
                source={map}
              ></ImageBackground>
              <Text style={styles.buttonText}>Call/GPS</Text>
            </Pressable>
          </View>
          <View style={styles.outerButton}>
            <Pressable
              style={styles.innerButton}
              android_ripple={{ color: COLORS.ripplePrimary }}
              onPress={() => navigation.navigate("CreateAnnouncement")}
            >
              <ImageBackground
                resizeMode="contain"
                style={styles.buttonImage}
                source={notes}
              ></ImageBackground>
              <Text style={styles.buttonText}>Create Announcement</Text>
            </Pressable>
          </View>
          <View style={styles.outerButton}>
            <Pressable
              style={styles.innerButton}
              android_ripple={{ color: COLORS.ripplePrimary }}
            >
              <ImageBackground
                style={styles.buttonImage}
                resizeMode="contain"
                source={monitor}
              ></ImageBackground>
              <Text style={styles.buttonText}>Monitor Students</Text>
            </Pressable>
          </View>
          <View style={styles.outerButton}>
            <Pressable
              style={styles.innerButton}
              android_ripple={{ color: COLORS.ripplePrimary }}
            >
              <ImageBackground
                style={styles.buttonImage}
                resizeMode="contain"
                source={list}
              ></ImageBackground>
              <Text style={styles.buttonText}>List of Students</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeAdmin;

const styles = StyleSheet.create({
  HomeAdmin: {},
  headerBg: {
    paddingTop: 30,
    width: "100%",
    height: 270,
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
  },
  logoContainer: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#ff9100",
    margin: 10,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerText1: {
    fontSize: 20,
    marginTop: 10,
  },
  headerText2: {
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
  },
  logoutButton: {
    marginLeft: 10,
  },
  logoutIcon: {
    color: "#E15020",
  },
  status: {
    padding: 10,
    flexDirection: "row",
  },
  location: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  weatherIcon: {
    marginHorizontal: 10,
    color: "#1976d2",
  },
  locationIcon: {
    marginHorizontal: 10,
    color: "#c62828",
  },
  main: {
    padding: 10,
  },
  mainHeaderText: {
    fontSize: 25,
  },
  outerButton: {
    width: 130,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#7e7e7e",
    height: 100,
    elevation: 10,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  innerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonImage: {
    width: 40,
    height: 50,
    // margin: 5,
  },
  buttonText: {
    height: 35,
    textAlign: "center",
  },
});
