import { Overlay } from "@rneui/themed";
import { useState } from "react";
import { Button, View } from "react-native";
import { Text, TextInput, StyleSheet } from "react-native";

const requestURL = "https://npcfi5v8r2.execute-api.eu-west-2.amazonaws.com/prod/users"

const ModifyUser = ({toggler, displayState, user}) => {
  const [username, setUsername] = useState("");
  const [access, setAccess] = useState("");

  const changeUser = async (user_id, username, group_id) => {
    const requestBody = {"user_id": user_id, "username": username, "group_id": group_id}
    await fetch(requestURL, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody), 
    redirect: "follow",
    referrerPolicy: "no-referrer",
    });
    setAccess("")
    setUsername("")
    toggler()
  }

  return (
    <Overlay isVisible={displayState} onBackdropPress={toggler}>
      <Text style={styles.inputTitle}>Username</Text>
      <TextInput onChangeText={setUsername} value={username} style={styles.inputField} />
      <Text style={styles.inputTitle}>Access level</Text>
      <TextInput onChangeText={setAccess} value={access} style={styles.inputField} />
      <View style={styles.button}>
        <Button title="submit" color="green" onPress={() => changeUser(user, username, access)}></Button>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 2,
    padding: 5,
    borderRadius: 5
  },
  inputTitle: {
    margin: 5,
    fontSize: 17,
  },
  button: {
    margin: 5
  }
})

export default ModifyUser;
