import { View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default function Header({ title }: { title: string }) {
  return (
    <View
      className="w-full p-4 bg-black"
      style={{ paddingTop: statusBarHeight }}
    >
      <Text className="text-white text-lg font-bold">{title}</Text>
    </View>
  );
}
