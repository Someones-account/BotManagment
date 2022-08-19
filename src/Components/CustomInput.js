import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} 
            style={styles.input} 
            value={value} 
            onChangeText={setValue} 
            secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lavender",
        width: "100%",
        height: 40,
        borderBottomWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 7,
        marginVertical: 10
    },
    input: {
        height: 40
    }
})

export default CustomInput;