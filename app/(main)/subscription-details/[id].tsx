import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const SubscriptionDetails = () => {
  const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>subscriptions details: {id}</Text>
      <Link href="/" className="text-blue-500">
        Go Back Home
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
