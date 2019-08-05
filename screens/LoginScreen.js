import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

export default function LoginScreen(props) {
  //   state = { user: null}

  //   handleFbSignIn = () => {
  //     const result = await Facebook.logInWithReadPermissionsAsync(
  //         '1702793543151409',
  //         { permissions: ['public_profile', 'email'] },
  //       );

  //       if (result.type !== 'success') return reject({ message: 'conceled' });

  //       const { token } = result;
  //       const credential = Firebase.auth.FacebookAuthProvider.credential(token);
  //       console.log(credential)
  //   }
  handleSignin = () => {
    props.navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/robot-dev.png")} />
      <SocialIcon
        style={styles.fbButton}
        title="Sign In With Facebook"
        button
        type="facebook"
        onPress={this.handleSignin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fbButton: {
    paddingHorizontal: 20,
    marginTop: 50
  }
});
