import React from "react";
import { Text, TextProps } from "react-native";

const DEFAULT_FONT_FAMILY = "Inter_400Regular";

export default function AppText({ style, ...props }: TextProps) {
  return (
    <Text style={[{ fontFamily: DEFAULT_FONT_FAMILY }, style]} {...props} />
  );
}
