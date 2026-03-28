import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/AppText";
const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center bg-background"
      style={{
        paddingVertical,
      }}
    >
      <AppText style={{ fontSize }}>Insights</AppText>
    </SafeAreaView>
  );
}
