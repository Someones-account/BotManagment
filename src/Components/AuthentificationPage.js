import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Profile.jpg";
import CustomInput from "./CustomInput";
import SignInbutton from "./SignInButton";
import ToolBarButton from "./ToolBarButton";

const onSignInPressed = () => {
  console.warn("Pressed");
};

const onForgotPressed = () => {
  Alert.alert(
    "Password recovery",
    "In case you forgot your password, please contact this email:",
    [{ text: "Dismiss" }]
  );
};

const onDocsOpen = () => {
  Alert.alert("Docs", "Version 1.0", [{ text: "Dismiss" }]);
};

const onHelpOpen = () => {
  Alert.alert("Support", "Some info", [{ text: "Dismiss" }]);
};

const AuthentifictionPage = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={styles.root}>
        <View style={styles.containerToolBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4/4259.png",
              }}
              style={styles.barLogo}
            ></Image>
          </TouchableOpacity>
          <ToolBarButton
            text={"Docs"}
            onPressAction={onDocsOpen}
          ></ToolBarButton>
          <ToolBarButton
            text={"Support"}
            onPressAction={onHelpOpen}
          ></ToolBarButton>
        </View>
        <Image
          style={[styles.logo, { height: height * 0.25 }]}
          source={Logo}
          resizeMode="contain"
        ></Image>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Username"
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <SignInbutton onPress={onSignInPressed} text="Sign in" type="primary" />
        <SignInbutton
          onPress={onForgotPressed}
          text="Forgot password?"
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 35,
    flex: 1,
  },
  logo: {
    width: "70%",
    height: 125,
    margin: 10,
  },
  containerToolBar: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
    height: 35,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 7,
  },
  barLogo: {
    width: 33,
    height: 33,
  },
});

export default AuthentifictionPage;
