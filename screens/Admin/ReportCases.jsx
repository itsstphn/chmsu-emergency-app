import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import PageHeader from "../../components/PageHeader";
import { COLORS } from "../../constants/theme";

import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#243748",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#243748",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `#fff`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const date = new Date();

const month = date.getMonth();

console.log("date: ", date);

const ReportCases = ({ navigation }) => {
  const [sos, setSos] = useState([]);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "SOS"), (querySnapshot) => {
      // data.push(doc.data().name);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setSos(data);
    });
    // console.log(data);
    return () => unsub();
  }, []);

  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June"];

    const dataPerMonth = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
    };

    months.forEach((month) => {
      let count = 0;
      sos.forEach((item) => {
        if (item.month === month) {
          count++;
        }
      });
      dataPerMonth[month] = count;
    });
    setIncidentsPerMonth(dataPerMonth);
  }, [sos]);

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      // "July",
      // "August",
      // "September",
      // "October",
      // "November",
      // "December",
    ],
    datasets: [
      {
        data: [
          incidentsPerMonth.January,
          incidentsPerMonth.February,
          incidentsPerMonth.March,
          incidentsPerMonth.April,
          incidentsPerMonth.May,
          incidentsPerMonth.June,
        ],
        color: (opacity = 1) => `#2472fc`, // optional
        strokeWidth: 1, // optional
      },
    ],
    legend: ["2023"], // optional
  };

  console.log("incidentsPerMonth", incidentsPerMonth);

  //   console.log("sos", sos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <PageHeader
        navigation={navigation}
        home="HomeAdmin"
        pageTitle="Report Cases"
        textColor={COLORS.primary}
      ></PageHeader>
      {incidentsPerMonth !== "" && (
        <LineChart
          data={data}
          width={screenWidth - 20}
          height={270}
          chartConfig={chartConfig}
          bezier
        />
      )}
      <View style={styles.incidents}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Number of Incidents on first half of Year {new Date().getFullYear()}
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.row}>
            <Text style={styles.dataText}>
              January: {incidentsPerMonth.January}
            </Text>
            <Text style={styles.dataText}>
              February: {incidentsPerMonth.February}
            </Text>
            <Text style={styles.dataText}>
              March: {incidentsPerMonth.March}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.dataText}>
              April: {incidentsPerMonth.April}
            </Text>
            <Text style={styles.dataText}>May: {incidentsPerMonth.May}</Text>
            <Text style={styles.dataText}>June: {incidentsPerMonth.June}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReportCases;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  incidents: {
    margin: 20,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  dataContainer: {
    flexDirection: "row",
    backgroundColor: "#6149CC",
    padding: 10,
    paddingVertical: 15,
    borderRadius: 15,
  },
  row: {
    marginHorizontal: 40,
  },
  dataText: {
    marginVertical: 5,
    color: "#fff",
    fontSize: 16,
  },
});
