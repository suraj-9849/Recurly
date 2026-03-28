import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icon";
import images from "@/constants/images";
import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";
import { styled } from "nativewind";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const getRandomColor = () => {
  const colors = [
    "#f5c542",
    "#e8def8",
    "#b8d4e3",
    "#b8e8d0",
    "#fcd5ce",
    "#d0f4de",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};


export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="flex-row justify-between items-center p-4">
          <View className="flex-row items-center gap-3">
            <View className="w-14 h-14 items-center justify-center rounded-full border border-dotted border-primary">
              <Image
                source={images.avatar}
                style={{ width: 48, height: 48, borderRadius: 24 }}
              />
            </View>

            <Text
              style={{ fontFamily: "sans-bold" }}
              className="text-lg text-primary"
            >
              {HOME_USER.name}
            </Text>
          </View>

          <View className="w-10 h-10 items-center justify-center rounded-full border border-dotted border-primary">
            <Image source={icons.plus} style={{ width: 18, height: 18 }} />
          </View>
        </View>

        <View className="mx-4 bg-[#E5734F] rounded-3xl px-5 py-6">
          <Text
            style={{ fontFamily: "sans-semibold" }}
            className="text-white/80 text-base"
          >
            Balance
          </Text>

          <View className="flex-row justify-between items-end mt-3">
            <Text
              style={{ fontFamily: "sans-extrabold" }}
              className="text-white text-3xl"
            >
              {formatCurrency(HOME_BALANCE.amount)}
            </Text>

            <Text
              style={{ fontFamily: "sans-medium" }}
              className="text-white text-base"
            >
              {formatSubscriptionDateTime(HOME_BALANCE.nextRenewalDate)}
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text
              style={{ fontFamily: "sans-bold" }}
              className="text-lg text-primary"
            >
              Upcoming
            </Text>

            <View className="border border-black/20 px-3 py-1 rounded-full">
              <Text
                style={{ fontFamily: "sans-semibold" }}
                className="text-sm text-primary"
              >
                View all
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
          >
            {UPCOMING_SUBSCRIPTIONS.map((item) => (
              <View
                key={item.id}
                className="mr-4 w-40 bg-background border border-black/10 rounded-2xl p-4"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-12 h-12 rounded-xl bg-[#F3EAD7] items-center justify-center">
                    <Image
                      source={item.icon}
                      style={{ width: 26, height: 26 }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{ fontFamily: "sans-bold" }}
                      className="text-base text-primary"
                    >
                      {formatCurrency(item.price)}
                    </Text>

                    <Text
                      style={{ fontFamily: "sans-medium" }}
                      className="text-xs text-black/60"
                    >
                      {item.daysLeft} days left
                    </Text>
                  </View>
                </View>

                <Text
                  style={{ fontFamily: "sans-bold" }}
                  className="mt-3 text-base text-primary"
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="mt-6 px-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text
              style={{ fontFamily: "sans-bold" }}
              className="text-lg text-primary"
            >
              All Subscriptions
            </Text>

            <View className="border border-black/20 px-3 py-1 rounded-full">
              <Text
                style={{ fontFamily: "sans-semibold" }}
                className="text-sm text-primary"
              >
                View all
              </Text>
            </View>
          </View>

          {HOME_SUBSCRIPTIONS.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center justify-between p-4 rounded-2xl mb-3"
              style={{ backgroundColor: getRandomColor() }}
            >
              <View className="flex-row items-center gap-3 flex-1">
                <View className="w-12 h-12 rounded-xl bg-white/30 items-center justify-center">
                  <Image source={item.icon} style={{ width: 26, height: 26 }} />
                </View>

                <View className="flex-1">
                  <Text
                    style={{ fontFamily: "sans-bold" }}
                    className="text-base text-primary"
                  >
                    {item.name.split(" ")[0]}
                  </Text>

                  <Text
                    style={{ fontFamily: "sans-medium" }}
                    className="text-xs text-black/60"
                  >
                    {formatSubscriptionDateTime(item.renewalDate)}
                  </Text>
                </View>
              </View>

              <View className="items-end">
                <Text
                  style={{ fontFamily: "sans-bold" }}
                  className="text-base text-primary"
                >
                  {formatCurrency(item.price)}
                </Text>

                <Text
                  style={{ fontFamily: "sans-medium" }}
                  className="text-xs text-black/60"
                >
                  per {item.billing.toLowerCase()}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
