import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default function Home() {
  const [searchInput, setSearchInput] = React.useState<string>("");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#074740] "
      style={{ paddingTop: statusBarHeight }}
    >
      <View className="text-[#074740] flex flex-col items-center justify-center">
        <View className="flex w-10/12 flex-row justify-between items-center my-2 ">
          <View className="flex flex-col gap-3">
            <Text className="text-xl color-gray-400">Bem vindo de volta!</Text>
            <Text className="text-2xl font-bold text-white">Fabrício</Text>
          </View>
          <View>
            <Icon name="shopping-bag" size={25} color="#a1a1a1" />
          </View>
        </View>
        <View className="w-11/12 flex flex-row h-14 items-center justify-center bg-gray-300  rounded-3xl gap-2">
          <Icon name="search" size={20} color="#074740" />
          <TextInput
            value={searchInput}
            placeholder="Procurar"
            onChangeText={setSearchInput}
            className="w-10/12 text-xl"
          />
        </View>

        <View className="flex flex-row w-11/12 h-60 bg-gray-300  mt-10 justify-around items-center rounded-3xl">
          <View className="h-2/3 w-1/2 flex flex-col justify-between">
            <Text className="text-2xl">Compre conosco</Text>
            <Text className="text-3xl font-bold">
              Tenha 40% Off para todos itens
            </Text>
            <TouchableOpacity>
              <Text className="text-xl">Compre Agora</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/mulher.png")}
            className="w-1/3 h-full"
          />
        </View>

        <View className="flex flex-row my-8 justify-between items-center w-11/12 ">
          <TouchableOpacity className="px-4 py-2 bg-white rounded-xl ">
            <Text>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 bg-gray-300 rounded-xl ">
            <Text>Tênis</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 bg-gray-300 rounded-xl">
            <Text>Sapatos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 bg-gray-300 rounded-xl">
            <Text>Vestidos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 bg-gray-300 rounded-xl">
            <Text>Bolsas</Text>
          </TouchableOpacity>
        </View>

        <View className="w-11/12 flex flex-row flex-wrap justify-between mt-4 mb-4 gap-8">
          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>

          <View className="w-5/12  flex flex-col items-center justify-center">
            <Image
              source={require("../../assets/images/bolsa.png")}
              className="w-40 h-40 bg-gray-300 rounded-lg"
            />
            <TouchableOpacity className="bg-white px-2 py-2 rounded-full absolute bottom-11">
              <Text>
                <Icon name="shopping-bag" size={25} />
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Text className="text-white">Produto 1</Text>
              <Text className="text-white font-bold text-2xl">Preço</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
