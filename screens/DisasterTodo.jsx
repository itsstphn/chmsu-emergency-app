import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import flood from "../assets/images/flood-infograph.png";
import typhoon from "../assets/images/typhoon-infograph.png";
import earthquake from "../assets/images/earthquake-infograph.png";
import fire from "../assets/images/fire-infograph.png";

const DisasterTodo = ({ route }) => {
  const { disaster } = route.params;
  const disasterImg =
    disaster === "flood"
      ? flood
      : disaster === "earthquake"
      ? earthquake
      : disaster === "typhoon"
      ? typhoon
      : fire;
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scroll}> */}
      <Image
        resizeMode="contain"
        style={styles.img}
        source={disasterImg}
      ></Image>
      {/* </ScrollView> */}

      {/* <Text>{disaster}</Text> */}
    </View>
  );
};

export default DisasterTodo;

const styles = StyleSheet.create({
  container: {
    // height: 10,
    height: "100%",
  },

  scroll: {},

  img: {
    width: "100%",
    //   width: 100,
    height: "100%",
  },
});
