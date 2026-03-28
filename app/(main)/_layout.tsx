import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="subscriptions" options={{ tabBarLabel: "Subscriptions" }} />
      <Tabs.Screen name="insights" options={{ tabBarLabel: "Insights" }} />
      <Tabs.Screen name="settings" options={{ tabBarLabel: "Settings" }} />
      <Tabs.Screen name="subscription-details/[id]" options={{ href: null }} />
    </Tabs>
  );
}
