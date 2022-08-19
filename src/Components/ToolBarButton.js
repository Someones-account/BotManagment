import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ToolBarButton = ({text, onPressAction}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressAction}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        alignItems: "center"
    }
})

export default ToolBarButton;
