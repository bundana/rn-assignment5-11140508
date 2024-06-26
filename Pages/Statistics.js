import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../ThemeContext";
import { lightTheme, darkTheme } from "../themes";

const Statistics = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={[styles.Stats, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Stats: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
  },
  text: {
    fontSize: 18,
  },
});

export default Statistics;
