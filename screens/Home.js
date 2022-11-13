import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import bannerImage from "../assets/images/CHMSU.jpg";
import { StatusBar } from "expo-status-bar";

import { COLORS, FONTS } from "./../constants/theme";
import HomeHeader from "./../components/HomeHeader";
import todo from "../assets/images/todo.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBullhorn,
  faLocationDot,
  faPeopleRoof,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";
import AuthStatus from "../components/AuthStatus";

const Home = ({ navigation }) => {
  const { user } = useAuthContext();

  return (
    <View style={styles.homeContainer}>
      {user && <AuthStatus></AuthStatus>}
      <StatusBar style="auto"></StatusBar>
      <HomeHeader></HomeHeader>
      <View style={styles.mainSectionContainer}>
        <View style={styles.locationContainer}>
          <FontAwesomeIcon
            style={{ color: COLORS.primary, marginRight: 3 }}
            size={30}
            icon={faLocationDot}
          ></FontAwesomeIcon>
          <Text style={styles.locationText}>
            Enclaro, Binalbagan, Negros Occidental
          </Text>
        </View>
        <View style={styles.outerTodo}>
          <Pressable
            style={styles.innerTodo}
            android_ripple={{ color: COLORS.ripplePrimary }}
            onPress={() => navigation.navigate("ToDo")}
          >
            <View style={styles.todoImageContainer}>
              <Image source={todo} style={styles.todoImage}></Image>
            </View>
            <View style={styles.todoTextContainer}>
              <Text
                style={[
                  styles.todoText,
                  { fontSize: 20, fontFamily: FONTS.bold },
                ]}
              >
                WHAT TO DO
              </Text>
              <Text style={styles.todoText}>
                Before, During, After{"\n"}Disasters?
              </Text>
            </View>
          </Pressable>
        </View>

        <Text style={styles.menuTitle}>Emergency Services</Text>

        <View style={styles.menuContainer}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.outerMenuButton}>
              <Pressable
                android_ripple={{ color: COLORS.ripplePrimary }}
                style={styles.innerMenuButton}
                onPress={() => navigation.navigate("Help")}
              >
                <FontAwesomeIcon
                  style={[styles.icon, { marginTop: -10 }]}
                  size={40}
                  icon={faTriangleExclamation}
                ></FontAwesomeIcon>

                <Text style={styles.menuText}>Help Me</Text>
              </Pressable>
            </View>

            <View style={styles.outerMenuButton}>
              <Pressable
                android_ripple={{ color: COLORS.ripplePrimary }}
                style={styles.innerMenuButton}
                onPress={() => navigation.navigate("SafetyLocations")}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faPeopleRoof}
                  size={40}
                ></FontAwesomeIcon>
                <Text style={styles.menuText}>Safety{"\n"}Locations</Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.outerMenuButton}>
              <Pressable
                android_ripple={{ color: COLORS.ripplePrimary }}
                style={styles.innerMenuButton}
                onPress={() => navigation.navigate("Announcements")}
              >
                <FontAwesomeIcon
                  style={[styles.icon, { marginTop: -10 }]}
                  size={40}
                  icon={faBullhorn}
                ></FontAwesomeIcon>
                <Text style={styles.menuText}>Announcements</Text>
              </Pressable>
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
    paddingTop: 35,

    flex: 1,
    // backgroundColor: COLORS.secondary,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  mainSectionContainer: {
    // alignItems: "center",
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  locationContainer: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    alignSelf: "center",
  },
  locationText: {
    marginLeft: 5,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },

  outerTodo: {
    alignSelf: "center",
    width: 320,
    height: 120,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    elevation: 3,
    overflow: "hidden",
    // alignItems: "center",
  },
  innerTodo: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  todoImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 85,
    marginLeft: 5,
  },

  todoImage: {
    width: "100%",
    height: "100%",
  },
  todoTextContainer: {
    justifyContent: "center",
    flex: 1,
  },
  todoText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  menuTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.primary,
    marginHorizontal: 20,
  },

  menuContainer: {
    // marginTop: 5,

    flex: 1,
    width: 350,

    // justifySelf: "center",
    // alignSelf: "center",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },

  outerMenuButton: {
    width: 140,
    height: 140,
    borderRadius: 32,
    overflow: "hidden",
    margin: 10,
    backgroundColor: COLORS.primary,
    // elevation: 2,
  },
  innerMenuButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    // marginTop: -10,
    margin: 5,
  },

  menuText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: FONTS.semiBold,
    textAlign: "center",
    alignSelf: "center",
  },
});
