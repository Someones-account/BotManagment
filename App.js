import AppDrawer from "./src/Components/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </>
  );
}
