import AppDrawer from "./src/Components/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { SignInFooter } from "./src/Components/Authentication/SignInFooter";
import { Footer } from "./src/Components/Authentication/Footer";
import { Header } from "./src/Components/Authentication/Header";
import { SignInHeader } from "./src/Components/Authentication/SignInHeader";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </>
  );
};

const signUpConfig = {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
}

// const signUpConfig = {
//   header: "My Customized Sign Up",
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//     },
//     {
//       label: "Email",
//       key: "email",
//       required: true,
//       displayOrder: 2,
//       type: "string",
//     },
//     {
//       label: "Username",
//       key: "preferred_username",
//       required: true,
//       displayOrder: 3,
//       type: "string",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ],
// };

export default withAuthenticator(App, { signUpConfig });
