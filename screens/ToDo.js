import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import PageHeader from "./../components/PageHeader";

const ToDo = ({ navigation }) => {
  return (
    <View style={styles.todoContainer}>
      <PageHeader
        rippleColor={COLORS.rippleSecondary}
        pageTitle="What to Do"
        textColor={COLORS.primary}
        navigation={navigation}
        home="Home"
      ></PageHeader>

      <View style={styles.menuContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
              onPress={() =>
                navigation.navigate("DisasterTodo", { disaster: "flood" })
              }
            >
              <Image
                style={styles.itemImage}
                source={require("../assets/images/flood.png")}
              ></Image>
              <Text style={styles.itemText}>Flood</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
              onPress={() =>
                navigation.navigate("DisasterTodo", { disaster: "earthquake" })
              }
            >
              <Image
                style={styles.itemImage}
                source={require("../assets/images/earthquake.png")}
              ></Image>
              <Text style={styles.itemText}>Earthquake</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
              onPress={() =>
                navigation.navigate("DisasterTodo", { disaster: "typhoon" })
              }
            >
              <Image
                style={styles.itemImage}
                source={require("../assets/images/storm.png")}
              ></Image>
              <Text style={styles.itemText}>Typhoon</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
              onPress={() =>
                navigation.navigate("DisasterTodo", { disaster: "fire" })
              }
            >
              <Image
                style={styles.itemImage}
                source={require("../assets/images/fire.png")}
              ></Image>
              <Text style={styles.itemText}>Fire</Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
            >
              {/* <Image
                style={styles.itemImage}
                source={require("../assets/images/zombie.png")}
              ></Image>
              <Text style={styles.itemText}>Apocalypse</Text> */}
            </Pressable>
          </View>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
            >
              {/* <Image
                style={styles.itemImage}
                source={require("../assets/images/alien.png")}
              ></Image>
              <Text style={styles.itemText}>Invasion</Text> */}
            </Pressable>
          </View>
        </View>
        <View style={styles.rowContainer}>
          {/* <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
            >
              <Image
                style={styles.itemImage}
                // source={require("../assets/images/fire.png")}
              ></Image>
              <Text style={styles.itemText}></Text>
            </Pressable>
          </View> */}
          {/* <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
            >
              <Image
                style={styles.itemImage}
                // source={require("../assets/images/zombie.png")}
              ></Image>
              <Text style={styles.itemText}></Text>
            </Pressable>
          </View>
          <View style={styles.item}>
            <Pressable
              style={styles.innerItem}
              android_ripple={{ color: "#ccc" }}
            >
              <Image
                style={styles.itemImage}
                // source={require("../assets/images/alien.png")}
              ></Image>
              <Text style={styles.itemText}></Text>
            </Pressable>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  menuContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    height: 120,
    width: "100%",
    // borderColor: "#333",
    // borderWidth: 1,
    alignItems: "center",
    marginBottom: 20,
  },

  item: {
    flex: 1,
    height: 200,
    height: "95%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    // backgroundColor: COLORS.primary,
    margin: 10,
    // justifyContent: "center",
  },
  innerItem: {
    padding: 10,
    height: "100%",
    width: "100%",
  },
  itemImage: {
    width: "95%",
    height: "80%",
    resizeMode: "contain",
  },
  itemText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    // color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});
