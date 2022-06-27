import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { FontAwesome5 } from "@expo/vector-icons";

const InputLocation = ({ selectBuilding, setSelectBuilding }) => {
  const selectionName = selectBuilding ? "Building" : "Room";
  return (
    <View style={styles.inputLocation}>
      <Text style={styles.selectionName}>{selectionName}</Text>
      <View style={styles.selectionContainer}>
        <View style={styles.row}>
          <Pressable
            onPress={() => setSelectBuilding(!selectBuilding)}
            style={styles.item}
          >
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Criminology</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>1</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => setSelectBuilding(!selectBuilding)}
            style={styles.item}
          >
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Information Technology</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>2</Text>
            )}
          </Pressable>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Education</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>3</Text>
            )}
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Fisheries</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>4</Text>
            )}
          </View>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Registrar</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>5</Text>
            )}
          </View>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}>Ground</Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>6</Text>
            )}
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}></Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>7</Text>
            )}
          </View>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}></Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>8</Text>
            )}
          </View>
          <View style={styles.item}>
            {selectionName === "Building" ? (
              <>
                <FontAwesome5
                  style={styles.buildingIcon}
                  name="building"
                  size={24}
                  color="black"
                />
                <Text style={styles.buildingName}></Text>
              </>
            ) : (
              <Text style={styles.roomNumber}>9</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default InputLocation;

const styles = StyleSheet.create({
  inputLocation: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 20,
  },
  selectionName: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 21,
    marginVertical: 10,
  },
  selectionContainer: {},
  row: {
    // flex: 1,
    flexDirection: "row",
    // height: 30,
  },
  item: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 100,
  },
  buildingIcon: {
    color: COLORS.primary,
    height: 30,
  },
  buildingName: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: 12,
  },
  roomNumber: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    fontSize: 28,
  },
});
