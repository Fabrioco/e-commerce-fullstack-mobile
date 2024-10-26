import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { products } from "@/src/data/products";
import { ImageSourcePropType } from "react-native";
import { ListCartProps, useListCart } from "@/src/contexts/ListCartContext";

const statusBarHeight = getStatusBarHeight();

const categories = ["Todos", "Tênis", "Sapatos", "Vestidos", "Bolsas"];

export default function Home() {
  const { listCart, setListCart } = useListCart();

  const [searchInput, setSearchInput] = React.useState<string>("");
  const [listProducts, setListProducts] =
    React.useState<ListCartProps[]>(products);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const buttonsRefCategories = React.useRef<(TouchableOpacity | null)[]>([]);

  const searchProduct = () => {
    const text = searchInput.trim();
    const results = products.filter((prod) =>
      prod.name.toLowerCase().includes(text.toLowerCase())
    );
    setListProducts(results);
  };

  const saveCart = async (
    id: number,
    product: string,
    price: number,
    image: ImageSourcePropType
  ) => {
    const fullItem: ListCartProps = {
      id: id,
      name: product,
      price: price,
      image: image,
    };
    setListCart((prevList) => {
      const cartUpdated = [...(prevList || []), fullItem];
      AsyncStorage.setItem("cart", JSON.stringify(cartUpdated));
      return cartUpdated;
    });
  };

  const showCategory = (tag: string, index: number) => {
    setActiveIndex(index);
    switch (tag) {
      case "Todos":
        setListProducts(products);
        setSearchInput("");
        break;
      case "Tênis":
        setListProducts(products.filter((item) => item.categoria === "Tenis"));
        break;
      case "Sapatos":
        setListProducts(
          products.filter((item) => item.categoria === "Sapatos")
        );
        break;
      case "Vestidos":
        setListProducts(
          products.filter((item) => item.categoria === "Vestidos")
        );
        break;
      case "Bolsas":
        setListProducts(products.filter((item) => item.categoria === "Bolsas"));
        break;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#074740]"
      style={{ paddingTop: statusBarHeight }}
    >
      <View className="text-[#074740] flex flex-col items-center justify-center pb-12">
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
          <Icon
            name="search"
            size={20}
            color="#074740"
            onPress={searchProduct}
          />
          <TextInput
            value={searchInput}
            placeholder="Procurar"
            onChangeText={setSearchInput}
            className="w-10/12 text-xl"
            onSubmitEditing={searchProduct}
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
          {categories.map((tag, index) => (
            <TouchableOpacity
              key={tag}
              className={`px-4 py-2 rounded-xl ${
                activeIndex === index ? "bg-white" : "bg-gray-300"
              }`}
              onPress={() => showCategory(tag, index)}
              ref={(ref) => (buttonsRefCategories.current[index] = ref)}
            >
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="w-11/12 flex flex-row flex-wrap justify-between mt-4 gap-8">
          {listProducts.map((prod) => (
            <View
              key={prod.id}
              className="w-5/12  flex flex-col items-center justify-center relative"
            >
              <Image
                source={prod.image}
                className="w-40 h-40 bg-gray-300 rounded-lg"
              />
              {prod.popular && (
                <Text className="text-xl absolute top-[-5] left-[-10] px-2 py-1 bg-white  rounded-md text-black uppercase">
                  Popular
                </Text>
              )}
              {prod.offer && (
                <Text className="text-xl absolute top-10 left-[-10] px-2 py-1 bg-white  rounded-md text-black uppercase">
                  Novo
                </Text>
              )}

              <TouchableOpacity
                className="bg-white px-2 py-2 rounded-full absolute bottom-11"
                onPress={() =>
                  saveCart(
                    prod.id,
                    prod.name,
                    prod.offerPrice ? prod.offerPrice : prod.price,
                    prod.image
                  )
                }
              >
                <Text>
                  <Icon name="shopping-bag" size={25} />
                </Text>
              </TouchableOpacity>
              <View className="mt-4">
                <Text className="text-white">{prod.name}</Text>
                {prod.offer ? (
                  <View className="flex flex-row gap-2">
                    <Text className="text-white font-normal text-2xl line-through">
                      R$ {prod.price}
                    </Text>
                    <Text className="text-white font-bold text-2xl">
                      R$ {prod.offerPrice}
                    </Text>
                  </View>
                ) : (
                  <Text className="text-white font-bold text-2xl">
                    R$ {prod.price}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
