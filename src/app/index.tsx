import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <Header title="Pagina Home" />
      <Text>Home Page</Text>
      <Button title="Go to Other Page" onPress={() => router.push("/outra")} />
    </View>
  );
}
