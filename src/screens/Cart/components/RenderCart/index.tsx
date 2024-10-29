import { useListCart } from "@/src/contexts/ListCartContext";
import { useStep } from "@/src/contexts/StepContext";
import { products } from "@/src/data/products";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Icon from "react-native-vector-icons/FontAwesome5";

const statusBarHeight = getStatusBarHeight();

export const RenderCart = () => {
  const { setStep } = useStep();
  const { listCart, shipping, setValue, value,  } = useListCart();

  React.useEffect(() => {
    const calculateValues = () => {
      const values = listCart?.map((item) => item.price);
      const sumavalues = values?.reduce(
        (accumulated, actualValue) => accumulated + actualValue,
        0
      );
      if (sumavalues) setValue(sumavalues);
    };
    calculateValues();
  }, [listCart]);

  return (
    <ScrollView
      className="flex-1 bg-[#074740]"
      style={{ paddingTop: statusBarHeight }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full items-center">
        <Text className="text-4xl h-10 w-full text-white font-bold text-center border-b-white border-b ">
          CARRINHO
        </Text>
        {listCart?.map((item) => (
          <View
            key={item.id}
            className="w-full flex flex-col items-center gap-10 mt-10"
          >
            <View className="w-11/12 h-60 flex flex-row items-center justify-around bg-slate-200 rounded-lg">
              <Image source={item.image} className="w-60 h-60" />
              <View className="h-1/2 flex justify-between items-center">
                <Text className="text-2xl w-9/12">{item.name}</Text>
                <Text className="text-3xl font-bold">R$ {item.price}</Text>
              </View>
            </View>
          </View>
        ))}

        <View className="bg-white flex flex-col justify-between w-11/12 h-40 mt-10 rounded-md p-4">
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">SubTotal</Text>
            <Text className="text-3xl">R$ {value}</Text>
          </View>
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">Frete</Text>
            <Text className="text-3xl">R$ 10</Text>
          </View>
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">Total</Text>
            <Text className="text-3xl">
              R$ {value == null ? 0 + shipping : value + shipping}
            </Text>
          </View>
        </View>

        {value === 0 ? (
          <TouchableOpacity
            className="mb-14 mt-8 bg-white flex items-center justify-center w-11/12 rounded-2xl"
            onPress={() => setStep(1)}
            disabled
          >
            <Text className="text-[#074740] px-4 py-8 text-5xl">
              Finalizar Compra <Icon name="arrow-right" size={30} />
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="mb-14 mt-8 bg-white flex items-center justify-center w-11/12 rounded-2xl"
            onPress={() => setStep(1)}
          >
            <Text className="text-[#074740] px-4 py-8 text-5xl">
              Finalizar Compra <Icon name="arrow-right" size={30} />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
