import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import bannerImage from "../assets/images/CHMSU.jpg";

import { COLORS, FONTS } from "./../constants/theme";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faCloudSun,
  faLocationDot,
  faMessage,
  faPeopleRoof,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          resizeMode="contain"
          source={bannerImage}
        ></Image>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerText, { fontSize: 20 }]}>CHMSC-BIN</Text>
          <Text style={styles.headerText}>Emergency Application</Text>
        </View>
        <View style={styles.weatherContainer}>
          <FontAwesomeIcon
            style={{ color: "#74C0FC" }}
            size={50}
            icon={faCloudSun}
          />
          <Text style={styles.weatherText}>Saturday, June 11</Text>
          <Text style={styles.weatherText}>Enclaro</Text>
          <Text style={styles.weatherText}>Mostly Cloudy</Text>
          <Text style={[styles.weatherText, { fontSize: 20, lineHeight: 20 }]}>
            30°C
          </Text>
        </View>
      </View>
      <View style={styles.mainSectionContainer}>
        <View style={styles.locationContainer}>
          <FontAwesomeIcon
            style={{ color: COLORS.main, marginRight: 5 }}
            size={20}
            icon={faLocationDot}
          ></FontAwesomeIcon>
          <Text style={styles.locationText}>
            Enclaro, Binalbagan, Negros Occidental
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={[styles.menuButton]}>
              <View
                style={{
                  padding: 21,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  borderRadius: 32,
                  overflow: "hidden",
                }}
              >
                <FontAwesomeIcon
                  style={{ color: "#fff" }}
                  size={32}
                  icon={faMessage}
                ></FontAwesomeIcon>
                <Text style={styles.menuText}>Messages</Text>
              </View>
            </View>

            <View style={styles.menuButton}>
              <FontAwesomeIcon
                style={{ color: "#fff" }}
                size={32}
                icon={faBell}
              ></FontAwesomeIcon>
              <Text style={styles.menuText}>Notifications</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.menuButton}>
              <FontAwesomeIcon
                style={{ color: "#fff" }}
                size={32}
                icon={faPeopleRoof}
              ></FontAwesomeIcon>
              <Text style={styles.menuText}>What To Do</Text>
            </View>
            <View style={styles.menuButton}>
              <FontAwesomeIcon
                style={{ color: "#fff" }}
                size={32}
                icon={faTriangleExclamation}
              ></FontAwesomeIcon>
              <Text style={styles.menuText}>Emergency</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 30,
    flex: 1,

    backgroundColor: "#fff",
  },
  bannerContainer: {
    width: "100%",
    height: 120,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    height: 120,
    backgroundColor: COLORS.main,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  headerTextContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  headerText: {
    fontFamily: FONTS.bold,
    fontSize: 23,
    color: "#fff",
  },
  weatherContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  weatherText: {
    color: "#fff",
    fontFamily: FONTS.bold,
    fontSize: 12,
    lineHeight: 12,
  },
  mainSectionContainer: {
    flex: 1,
    padding: 16,
  },
  locationContainer: {
    flexDirection: "row",
  },
  locationText: {
    fontFamily: FONTS.regular,
  },
  menuContainer: {
    marginTop: 32,
    width: 300,
    height: 300,
    // justifySelf: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 16,
  },
  menuButton: {
    backgroundColor: COLORS.main,
    width: 120,
    height: 120,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    fontFamily: FONTS.semiBold,
  },
});
