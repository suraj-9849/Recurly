import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  let paddingVertical = 6;

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center bg-background"
      style={{
        paddingVertical,
      }}
    >
      <Text className="text-2xl font-sans-regular text-primary">Insights</Text>
    </SafeAreaView>
  );
}
