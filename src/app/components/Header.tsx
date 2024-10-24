import { View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default function Header() {
  return <View style={{ paddingTop: statusBarHeight }}></View>;
}
