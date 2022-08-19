import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SignInbutton = ({onPress, text, type}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
        borderRadius: 7
    },
    container_tertiary: {},
    container_primary: {
        backgroundColor: "lightgreen",
    }
})

export default SignInbutton;
