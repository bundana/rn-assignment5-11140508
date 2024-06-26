import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "../Configurations/ThemeContext";
import { lightTheme, darkTheme } from "../Configurations/themes";

const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View
      style={[styles.HomeContainer, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.HomeContainer1}>
        <View style={styles.HomeContainer1Mini1}>
          <View style={styles.profile}>
            <Image
              style={styles.profile}
              source={require("../assets/profile.png")}
            />
          </View>
        </View>
        <View style={styles.HomeContainer1Mini2}>
          <Text style={[styles.small, { color: theme.textColor }]}>
            Welcome back,
          </Text>
          <Text style={[styles.big, { color: theme.textColor }]}>
            Eric Atsu
          </Text>
        </View>
        <View style={styles.HomeContainer1Mini3}>
          <TouchableOpacity>
            <View style={styles.search}>
              <Image source={require("../assets/search.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.HomeContainer2}>
        <Image style={styles.card} source={require("../assets/Card.png")} />
      </View>
      <View style={styles.HomeContainer3}>
        <View style={styles.HomeContainer3Mini}>
          <TouchableOpacity>
            <View style={styles.SRLT}>
              <Image
                style={styles.SRLTicon1}
                source={require("../assets/send.png")}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.TextBox}>
            <TouchableOpacity>
              <Text style={[styles.TextBoxText, { color: theme.textColor }]}>
                Sent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.HomeContainer3Mini}>
          <TouchableOpacity>
            <View style={styles.SRLT}>
              <Image
                style={styles.SRLTicon1}
                source={require("../assets/recieve.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.TextBox}>
            <TouchableOpacity>
              <Text style={[styles.TextBoxText, { color: theme.textColor }]}>
                Recieve
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.HomeContainer3Mini}>
          <TouchableOpacity>
            <View style={styles.SRLT}>
              <Image
                style={styles.SRLTicon2}
                source={require("../assets/loan.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.TextBox}>
            <TouchableOpacity>
              <Text style={[styles.TextBoxText, { color: theme.textColor }]}>
                Loan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.HomeContainer3Mini}>
          <TouchableOpacity>
            <View style={styles.SRLT}>
              <Image
                style={styles.SRLTicon2}
                source={require("../assets/topUp.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.TextBox}>
            <TouchableOpacity>
              <Text style={[styles.TextBoxText, { color: theme.textColor }]}>
                Topup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.HomeContainer4}>
        <View style={styles.HomeContainer4Mini1}>
          <Text style={[styles.Transaction, { color: theme.textColor }]}>
            Transaction
          </Text>
          <Text style={styles.SeeAll}>Sell All</Text>
        </View>

        <View style={styles.HomeContainer4Mini2}>
          <View style={styles.Mini2A}>
            <View style={styles.Mini2AOne}>
              <View style={styles.icons}>
                <Image source={require("../assets/apple.png")} />
              </View>
            </View>
            <View style={styles.Mini2ATwo}>
              <Text style={[styles.big, { color: theme.textColor }]}>
                Apple Store
              </Text>
              <Text style={[styles.small, { color: theme.textColor }]}>
                Entertainment
              </Text>
            </View>
            <View style={styles.Mini2AThree}>
              <Text style={[styles.big1, { color: theme.textColor }]}>
                -$5,99
              </Text>
            </View>
          </View>
          <View style={styles.Mini2A}>
            <View style={styles.Mini2AOne}>
              <View style={styles.icons}>
                <Image source={require("../assets/spotify.png")} />
              </View>
            </View>
            <View style={styles.Mini2ATwo}>
              <Text style={[styles.big, { color: theme.textColor }]}>
                Spotify
              </Text>
              <Text style={[styles.small, { color: theme.textColor }]}>
                Music
              </Text>
            </View>
            <View style={styles.Mini2AThree}>
              <Text style={[styles.big1, { color: theme.textColor }]}>
                -$12,99
              </Text>
            </View>
          </View>
          <View style={styles.Mini2A}>
            <View style={styles.Mini2AOne}>
              <View style={styles.icons}>
                <Image source={require("../assets/moneyTransfer.png")} />
              </View>
            </View>
            <View style={styles.Mini2ATwo}>
              <Text style={[styles.big, { color: theme.textColor }]}>
                Money Transfer
              </Text>
              <Text style={[styles.small, { color: theme.textColor }]}>
                Transaction
              </Text>
            </View>
            <View style={styles.Mini2AThree}>
              <Text style={styles.big0}>$3,00</Text>
            </View>
          </View>
          <View style={styles.Mini2A}>
            <View style={styles.Mini2AOne}>
              <View style={styles.icons}>
                <Image source={require("../assets/grocery.png")} />
              </View>
            </View>
            <View style={styles.Mini2ATwo}>
              <Text style={[styles.big, { color: theme.textColor }]}>
                Grocery
              </Text>
              <Text style={[styles.small, { color: theme.textColor }]}>
                Shoping
              </Text>
            </View>
            <View style={styles.Mini2AThree}>
              <Text style={[styles.big1, { color: theme.textColor }]}>
                -$88
              </Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },

  HomeContainer1: {
    width: 340,
    height: 48,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 1,
  },
  HomeContainer1Mini1: {
    height: 40,
    width: 50,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 38,
    height: 38,

    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    width: 36,
    height: 36,

    backgroundColor: "#E5E4E2",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  big: {
    fontSize: 16,
    fontWeight: "600",
  },
  big0: {
    fontSize: 16,
    fontWeight: "600",
    color: "blue",
    textAlign: "right",
  },
  big1: {
    fontSize: 16,
    fontWeight: "600",

    textAlign: "right",
  },
  small: {
    fontSize: 14,
    fontWeight: "300",
  },
  HomeContainer1Mini2: {
    height: 40,
    width: 200,

    alignItems: "left",
    paddingLeft: 5,
    justifyContent: "space-around",
  },

  HomeContainer1Mini3: {
    height: 40,
    width: 70,

    alignItems: "center",
    justifyContent: "center",
  },
  HomeContainer2: {
    width: 340,
    height: 180,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 1,
  },
  card: {
    width: 290,
    height: 170,
  },

  HomeContainer3: {
    width: 340,
    height: 80,

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 1,
  },
  HomeContainer3Mini: {
    height: 70,
    width: 70,

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  SRLT: {
    width: 40,
    height: 40,

    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E4E2",
  },
  SRLTicon1: {
    width: 15,
    height: 19,
  },
  SRLTicon2: {
    width: 20,
    height: 20,
  },
  TextBox: {
    width: "98%",
    height: 18,

    alignItems: "center",
    justifyContent: "center",
  },
  TextBoxText: {
    fontSize: 12,
    fontWeight: "600",
  },
  HomeContainer4: {
    width: 340,
    height: 266,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 1,
  },
  HomeContainer4Mini1: {
    height: 30,
    width: 338,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  Transaction: {
    fontSize: 17,
    fontWeight: "400",
  },
  SeeAll: {
    fontSize: 12,
    fontWeight: "700",
    color: "blue",
  },
  HomeContainer4Mini2: {
    height: 230,
    width: 338,

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: 1,
  },
  Mini2A: {
    width: 340,
    height: 50,

    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 1,
  },
  Mini2AOne: {
    width: 50,
    height: 40,

    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: 36,
    height: 36,

    backgroundColor: "#E5E4E2",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Mini2ATwo: {
    width: 190,
    height: 40,

    alignItems: "left",
    paddingLeft: 5,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  Mini2AThree: {
    width: 70,
    height: 45,

    paddingLeft: 5,
    justifyContent: "center",
  },
});

export default Home;
