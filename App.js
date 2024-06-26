import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
import { ThemeProvider, useTheme } from "./Configurations/ThemeContext";
import { lightTheme, darkTheme } from "./Configurations/themes";
import MyCards from "./Pages/MyCards";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function AppContent() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme.tabBarBackground,
          },
          tabBarActiveTintColor: theme.tabBarActiveColor,
          tabBarInactiveTintColor: theme.tabBarInactiveColor,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === "Home") {
              iconSource = focused
                ? require("./assets/home.png")
                : require("./assets/home2.png");
            } else if (route.name === "Statistics") {
              iconSource = focused
                ? require("./assets/statictics.png")
                : require("./assets/statictics.png");
            } else if (route.name === "My Cards") {
              iconSource = focused
                ? require("./assets/myCards.png")
                : require("./assets/myCards.png");
            } else if (route.name === "Settings") {
              iconSource = focused
                ? require("./assets/settings.png")
                : require("./assets/settings2.png");
            }
            const iconHeight = 20;
            const aspectRatio = size / iconHeight;

            return (
              <Image
                source={iconSource}
                style={{
                  width: size * aspectRatio,
                  height: iconHeight,
                  resizeMode: "contain",
                }}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="My Cards" component={MyCards} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "space-evenly",
  },
});
