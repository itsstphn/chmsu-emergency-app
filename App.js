import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
const Stack = createNativeStackNavigator();
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Helpme from "./screens/Helpme";
import ToDo from "./screens/ToDo";
import SafetyLocations from "./screens/SafetyLocations";
import Announcements from "./screens/Announcements";
import DisasterTodo from "./screens/DisasterTodo";
import { AuthContextProvider } from "./context/AuthContext";
import { LogBox } from "react-native";
import Signup from "./screens/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { UserDataContextProvider } from "./context/UserDataContext";
import HomeAdmin from "./screens/Admin/HomeAdmin";
import CreateAnnouncement from "./screens/Admin/CreateAnnouncement";
import { UsersListContextProvider } from "./context/UsersListContext";
import ListOfStudents from "./screens/Admin/ListOfStudents";
import ReportCases from "./screens/Admin/ReportCases";

LogBox.ignoreAllLogs();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
    </Stack.Navigator>
  );
};

const AdminStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

const AuthenticatedStack = () => {
  const { isAdmin } = useAuthContext();
  return (
    <>
      {isAdmin ? (
        <Stack.Navigator
          initialRouteName="HomeAdmin"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeAdmin" component={HomeAdmin}></Stack.Screen>
          <Stack.Screen
            name="CreateAnnouncement"
            component={CreateAnnouncement}
          ></Stack.Screen>

          <Stack.Screen
            name="ListOfStudents"
            component={ListOfStudents}
          ></Stack.Screen>

          <Stack.Screen
            name="ReportCases"
            component={ReportCases}
          ></Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="ToDo" component={ToDo}></Stack.Screen>
          <Stack.Screen name="Help" component={Helpme}></Stack.Screen>
          <Stack.Screen
            name="DisasterTodo"
            component={DisasterTodo}
          ></Stack.Screen>
          <Stack.Screen
            name="SafetyLocations"
            component={SafetyLocations}
          ></Stack.Screen>
          <Stack.Screen
            name="Announcements"
            component={Announcements}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
    </>
  );
};

const Screens = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <NavigationContainer>
          {user ? (
            <AuthenticatedStack></AuthenticatedStack>
          ) : (
            <AuthStack></AuthStack>
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
  return (
    <>
      <AuthContextProvider>
        <UserDataContextProvider>
          <UsersListContextProvider>
            <Screens></Screens>
          </UsersListContextProvider>
        </UserDataContextProvider>
      </AuthContextProvider>
    </>
  );
}
