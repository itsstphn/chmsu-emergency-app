import { View, StyleSheet, Text, Image } from "react-native";
import bannerImage from "../assets/images/CHMSU.jpg";

import { COLORS, FONTS } from "./../constants/theme";
import HomeHeader from "./../components/HomeHeader";
import todo from "../assets/images/todo.png";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBullhorn,
  faHandHoldingMedical,
  faLocationDot,
  faPeopleRoof,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
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
        <View style={styles.todo}>
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
              WHAT TO DO?
            </Text>
            <Text style={styles.todoText}>
              Before, During, After{"\n"}Disasters
            </Text>
          </View>
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
            <View style={[styles.menuButton]}>
              <FontAwesomeIcon
                style={[styles.icon, { marginTop: -10 }]}
                size={40}
                icon={faTriangleExclamation}
              ></FontAwesomeIcon>

              <Text style={styles.menuText}>Help Me</Text>
            </View>

            <View style={styles.menuButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={faPeopleRoof}
                size={40}
              ></FontAwesomeIcon>
              <Text style={styles.menuText}>Safety{"\n"}Locations</Text>
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
            <View style={styles.menuButton}>
              <FontAwesomeIcon
                style={[styles.icon, { marginTop: -10 }]}
                size={40}
                icon={faBullhorn}
              ></FontAwesomeIcon>
              <Text style={styles.menuText}>Announcements</Text>
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
    backgroundColor: COLORS.secondary,
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

  todo: {
    alignSelf: "center",
    width: "85%",
    height: 120,
    marginBottom: 30,
    borderRadius: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 3,
    // alignItems: "center",
  },
  todoImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 85,
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
    color: COLORS.primary,
    textAlign: "center",
  },
  menuTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.primary,
    marginHorizontal: 20,
  },

  menuContainer: {
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    flex: 1,
    width: 350,
    backgroundColor: "#fff",
    // justifySelf: "center",
    // alignSelf: "center",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  menuButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: COLORS.secondary,

    width: 140,
    height: 140,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  icon: {
    color: COLORS.primary,
    // marginTop: -10,
    margin: 5,
  },

  menuText: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
    alignSelf: "center",
  },
});
