import "../assets/styles/global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from "./Home/Home";
import OtherPage from "./Cart/Cart";
import Informations from "./Informations/Informations";

export default function RootLayout() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            height: 50,
            display: "flex",
            borderWidth: 0,
            borderTopWidth: 0,
            alignContent: "center",
          },
          tabBarItemStyle: {
            height: 50,
            width: 30,
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#074740",
          tabBarInactiveTintColor: "#00000090",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={OtherPage}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-bag" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Informations"
          component={Informations}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="info" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
