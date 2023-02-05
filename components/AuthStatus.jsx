import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useAuthContext } from "./../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { COLORS, FONTS } from "../constants/theme";
import { useUserDataContext } from "../hooks/useUserDataContext";

import { useSignout } from "./../hooks/useSignout";

const AuthStatus = () => {
  const { name } = useUserDataContext();

  const { signout } = useSignout();

  const handleLogoutPress = () => {
    signout();
  };

  return (
    <View style={styles.authStatus}>
      {name && (
        <>
          <Text
            style={styles.profileName}
          >{`${name.firstName} ${name.lastName}`}</Text>
          <Pressable onPress={() => handleLogoutPress()}>
            <FontAwesomeIcon
              style={styles.logoutIcon}
              size={25}
              icon={faRightFromBracket}
            ></FontAwesomeIcon>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default AuthStatus;

const styles = StyleSheet.create({
  authStatus: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 5,
    paddingRight: 30,
    justifyContent: "flex-end",
  },
  profileName: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
  logoutIcon: {
    marginHorizontal: 10,
    color: "#E15020",
  },
});
