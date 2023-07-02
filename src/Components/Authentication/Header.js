import { Image } from "react-native";

 export const Header = () => {
  return (
    <Image
        style={[styles.logo, { height: height * 0.25 }]}
        source={Logo}
        resizeMode="contain"
    />
  );
}
