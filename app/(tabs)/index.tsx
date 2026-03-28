import { Link } from "expo-router";
import { View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Link
        href="/onboarding"
        className="bg-blue-500 px-4 py-2 rounded text-white font-semibold mb-2 w-40 text-center"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/signin"
        className="bg-blue-500 px-4 py-2 rounded text-white font-semibold mb-2 w-40 text-center"
      >
        Go to Signin
      </Link>

      <Link
        href="/signup"
        className="bg-blue-500 px-4 py-2 rounded text-white font-semibold w-40 text-center"
      >
        Go to Signup
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="bg-green-500 px-4 py-2 rounded text-white font-semibold mt-4 w-40 text-center"
      >
        Go to Spotify
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",

          params: { id: "claude" },
        }}
        className="bg-green-500 px-4 py-2 rounded text-white font-semibold mt-4 w-40 text-center"
      >
        {" "}
        Go to Claude{" "}
      </Link>
    </View>
  );
}
