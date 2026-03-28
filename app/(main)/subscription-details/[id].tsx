import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import AppText from "../../../components/AppText";
const SafeAreaView = styled(RNSafeAreaView);

export default function SubscriptionDetails() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const { id } = useLocalSearchParams<{ id: string }>();

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
      <AppText style={{ fontSize }}>Subscriptions Details : {id}</AppText>
    </SafeAreaView>
  );
}
