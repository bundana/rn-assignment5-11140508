import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useTheme} from "../Configurations/ThemeContext";
import {lightTheme, darkTheme} from "../Configurations/themes";

const Statistics = ({navigation}) => {
    const {isDarkMode} = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;
    return (
        <View style={[styles.Stats, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[styles.text, {color: theme.textColor}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lectus metus. Proin eget velit
                facilisis, iaculis libero vitae, facilisis felis. Maecenas mollis elit massa, sit amet ultricies magna
                dignissim sed. Nulla volutpat eu ante in lobortis.
            </Text>
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
