import { ScrollView } from "react-native";
import { Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default function Cart() {
  return (
    <ScrollView className="" style={{paddingTop: statusBarHeight}}>
      <Text>carrinho</Text>
    </ScrollView>
  );
}
