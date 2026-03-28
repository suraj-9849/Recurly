import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/signin">Already have an account? Sign in</Link>
    </View>
  );
};

export default Signup;
