import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, FONTS } from "../../constants/theme";
import PageHeader from "./../../components/PageHeader";
import { useUsersListContext } from "../../hooks/useUsersListContext";

const ListOfStudents = ({ navigation }) => {
  const { usersList } = useUsersListContext();

  const filteredUsersList = [
    ...usersList.filter((item) => item.userType === "student"),
  ];
  console.log("filtered users: ", filteredUsersList);

  const renderedItem = ({ item }) => (
    <View key={item.email} style={styles.item}>
      <Text style={styles.itemText}>
        Name: {item.firstName} {item.lastName}
      </Text>
      <Text>Email: {item.email}</Text>
      <Text>Mobile Number: {item.mobileNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <PageHeader
        navigation={navigation}
        home="HomeAdmin"
        pageTitle="List of Students"
        textColor={COLORS.primary}
      ></PageHeader>
      <View style={styles.list}>
        <FlatList
          data={filteredUsersList}
          renderItem={renderedItem}
          keyExtractor={(item) => item.email}
        ></FlatList>
      </View>
    </View>
  );
};

export default ListOfStudents;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  item: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  itemText: {
    marginVertical: 1,
    fontFamily: FONTS.bold,
    color: "#0B3954",
  },
});
