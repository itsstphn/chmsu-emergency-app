import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
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
  faPhone,
  faRightFromBracket,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useSignout } from "./../../hooks/useSignout";
import useDate from "../../hooks/useDate";
import { COLORS, FONTS } from "../../constants/theme";
import { useUsersListContext } from "../../hooks/useUsersListContext";
import useWeather from "./../../hooks/useWeather";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useUserDataContext } from "../../hooks/useUserDataContext";
import call from "react-native-phone-call";

const HomeAdmin = ({ navigation }) => {
  const [sos, setSos] = useState([]);

  const { location } = useUserDataContext();

  const { weather } = useWeather();

  const { signout, error, isPending } = useSignout();
  const handleLogoutPress = () => {
    signout();
  };
  const { day, month, date } = useDate();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "SOS"), (querySnapshot) => {
      // data.push(doc.data().name);
      const data = [];
      querySnapshot.forEach((doc) => {
        const show = doc.data().show;
        show && data.push({ ...doc.data(), id: doc.id });
      });
      setSos(data);
    });
    // console.log(data);
    return () => unsub();
  }, []);

  function makeCall(phone) {
    const args = {
      number: phone,
      prompt: true,
    };
    call(args).catch(console.error);
  }

  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteCaller = async (uid) => {
    try {
      await updateDoc(doc(db, "SOS", uid), { show: false });
    } catch (error) {
      console.log(error);
    }
  };

  const [callerLocationImg, setCallerLocationImg] = useState(null);

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
            <Text>
              {weather?.desc} {weather?.temp}
            </Text>
          </View>
        </View>
        {location && (
          <View style={styles.location}>
            <View style={styles.locationIconContainer}>
              <FontAwesomeIcon
                style={styles.locationIcon}
                size={35}
                icon={faLocationDot}
              ></FontAwesomeIcon>
            </View>
            <View style={styles.locationTextContainer}>
              <Text>{location?.address?.city}</Text>
            </View>
          </View>
        )}
      </ImageBackground>
      <View style={styles.main}>
        <Text style={styles.mainHeaderText}>Welcome Admin,</Text>
        <Text>Swipe for more.</Text>
        <ScrollView horizontal>
          {/* <View style={styles.outerButton}>
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
          </View> */}
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
              onPress={() => navigation.navigate("ListOfStudents")}
            >
              <ImageBackground
                style={styles.buttonImage}
                resizeMode="contain"
                source={list}
              ></ImageBackground>
              <Text style={styles.buttonText}>List of Students</Text>
            </Pressable>
          </View>
          <View style={styles.outerButton}>
            <Pressable
              style={styles.innerButton}
              android_ripple={{ color: COLORS.ripplePrimary }}
              onPress={() => navigation.navigate("ReportCases")}
            >
              <ImageBackground
                style={styles.buttonImage}
                resizeMode="contain"
                source={monitor}
              ></ImageBackground>
              <Text style={styles.buttonText}>Report Cases</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.secondary}>
        <Text style={styles.callersTitle}>Emergency Callers</Text>
        {sos.length === 0 && <Text>No Callers as of the moment.</Text>}
        {sos.map((caller) => (
          <View style={styles.caller} key={caller.location}>
            <View style={styles.callerDetails}>
              <Text style={styles.callerText}>{caller.name}</Text>
              <Text style={styles.callerText}>{caller.mobileNumber}</Text>
            </View>

            {/* <View style={styles.imageContainer}></View> */}
            <Pressable
              onPress={() => {
                setCallerLocationImg(caller.location);
                setModalVisible(true);
              }}
            >
              <FontAwesomeIcon
                style={styles.mapLocationIcon}
                size={30}
                icon={faMapLocation}
              ></FontAwesomeIcon>
            </Pressable>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                setCallerLocationImg(null);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image
                    style={styles.locationImage}
                    source={{ uri: callerLocationImg }}
                  ></Image>
                </View>
              </View>
            </Modal>
            <Pressable
              style={{ marginHorizontal: 20 }}
              onPress={() => makeCall(caller.mobileNumber)}
            >
              <FontAwesomeIcon
                style={{ color: "#1976d2" }}
                size={30}
                icon={faPhone}
              ></FontAwesomeIcon>
            </Pressable>
            <Pressable onPress={() => handleDeleteCaller(caller.id)}>
              <FontAwesomeIcon
                style={{ color: "#d22519" }}
                size={30}
                icon={faX}
              ></FontAwesomeIcon>
            </Pressable>
          </View>
        ))}
      </ScrollView>
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
  callerLocation: {
    width: "100%",
    height: "100%",
  },
  secondary: {
    padding: 15,
  },
  callersTitle: {
    fontFamily: FONTS.bold,
    fontSize: 15,
  },
  caller: {
    marginVertical: 10,
    flexDirection: "row",
  },
  callerDetails: {
    width: 200,
  },
  callerText: {
    fontSize: 16,
    marginVertical: 2,
  },
  imageContainer: {
    height: 300,
    width: 100,
  },
  mapLocationIcon: {
    color: COLORS.primary,
  },
  locationImage: {
    height: 670,
    width: 350,
  },
  modalView: {
    margin: 20,
    height: 700,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
