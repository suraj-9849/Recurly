import "../global.css";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function MainLayout() {
  const insets = useSafeAreaInsets();
  const { tabBar } = components;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tabs
        .filter((tab) => tab.icon != null)
        .map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, focused }) => (
                <View
                  style={{
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    borderRadius: tabBar.iconFrame / 2,
                    backgroundColor: focused ? colors.accent : "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={tab.icon}
                    style={{
                      width: tabBar.iconFrame / 2,
                      height: tabBar.iconFrame / 2,
                      tintColor: focused ? colors.primary : color,
                    }}
                    resizeMode="contain"
                  />
                </View>
              ),
            }}
          />
        ))}

      <Tabs.Screen name="subscription-details/[id]" options={{ href: null }} />
    </Tabs>
  );
}
