import React from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../Configurations/ThemeContext";
import { lightTheme, darkTheme } from "../Configurations/themes";

const Settings = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={[
        styles.SettingsContainer,
        { backgroundColor: theme.backgroundColor },
      ]}
    >
      <View style={styles.main1}>
        <View style={styles.one}>
          <Text style={[styles.Text, { color: theme.textColor }]}>
            Language
          </Text>
          <View style={styles.iconBox}>
            <AntDesign
              name="right"
              size={14}
              color="black"
              style={[styles.text, { color: theme.textColor }]}
            />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={[styles.Text, { color: theme.textColor }]}>
            My Profile
          </Text>
          <View style={styles.iconBox}>
            <AntDesign
              name="right"
              size={14}
              color="black"
              style={[styles.text, { color: theme.textColor }]}
            />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={[styles.Text, { color: theme.textColor }]}>
            Contact Us
          </Text>
          <View style={styles.iconBox}>
            <AntDesign
              name="right"
              size={14}
              color="black"
              style={[styles.text, { color: theme.textColor }]}
            />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={[styles.Text, { color: theme.textColor }]}>
            Change Password
          </Text>
          <View style={styles.iconBox}>
            <AntDesign
              name="right"
              size={14}
              color="black"
              style={[styles.text, { color: theme.textColor }]}
            />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={[styles.Text, { color: theme.textColor }]}>
            Privacy Policy
          </Text>
          <View style={styles.iconBox}>
            <AntDesign
              name="right"
              size={14}
              color="black"
              style={[styles.text, { color: theme.textColor }]}
            />
          </View>
        </View>
      </View>
      <View style={styles.main2}>
        <View style={styles.two}>
          <Text style={[styles.Text, { color: theme.textColor }]}>Theme</Text>
          <View style={styles.themeBox}>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SettingsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main1: {
    width: 340,
    height: 260,

    alignItems: "center",
    justifyContent: "space-evenly",
  },
  main2: {
    width: 340,
    height: 320,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  one: {
    width: 330,
    height: 40,

    borderBottomWidth: 0.3,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 60,
    height: 34,

    alignItems: "center",
    justifyContent: "center",
  },
  themeBox: {
    width: 100,
    height: 34,

    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "500",
  },
  two: {
    width: 330,
    height: 40,

    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    alignItems: "center",
  },
});

export default Settings;
