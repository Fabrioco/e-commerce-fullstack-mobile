import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Icon from "react-native-vector-icons/FontAwesome5";
import QRCodePix from "./components/PaymentPix";

import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentCard from "./components/PaymentCard";

const statusBarHeight = getStatusBarHeight();

export default function Cart() {
  return (
    <ScrollView
      className="flex-1 bg-[#074740]"
      style={{ paddingTop: statusBarHeight }}
      showsVerticalScrollIndicator={false}
    >
      {/* <View className="w-full items-center">
        <Text className="text-4xl h-10 w-full text-white font-bold text-center border-b-white border-b ">
          CARRINHO
        </Text>
        <View className="w-full flex flex-col items-center gap-10 mt-10">
          <View className="w-11/12 h-60 flex flex-row items-center justify-around bg-slate-200 rounded-lg">
            <Image
              source={require("../assets/images/bolsa.png")}
              className="w-60 h-60"
            />
            <View className="h-1/2 flex justify-between items-center">
              <Text className="text-2xl">Produto 1</Text>
              <Text className="text-3xl font-bold">Preço</Text>
            </View>
          </View>

          <View className="w-11/12 h-60 flex flex-row items-center justify-around bg-slate-200 rounded-lg">
            <Image
              source={require("../assets/images/bolsa.png")}
              className="w-60 h-60"
            />
            <View className="h-1/2 flex justify-between items-center">
              <Text className="text-2xl">Produto 1</Text>
              <Text className="text-3xl font-bold">Preço</Text>
            </View>
          </View>

          <View className="w-11/12 h-60 flex flex-row items-center justify-around bg-slate-200 rounded-lg">
            <Image
              source={require("../assets/images/bolsa.png")}
              className="w-60 h-60"
            />
            <View className="h-1/2 flex justify-between items-center">
              <Text className="text-2xl">Produto 1</Text>
              <Text className="text-3xl font-bold">Preço</Text>
            </View>
          </View>

          <View className="w-11/12 h-60 flex flex-row items-center justify-around bg-slate-200 rounded-lg">
            <Image
              source={require("../assets/images/bolsa.png")}
              className="w-60 h-60"
            />
            <View className="h-1/2 flex justify-between items-center">
              <Text className="text-2xl">Produto 1</Text>
              <Text className="text-3xl font-bold">Preço</Text>
            </View>
          </View>
        </View>

        <View className="bg-white flex flex-col justify-between w-11/12 h-40 mt-10 rounded-md p-4">
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">SubTotal</Text>
            <Text className="text-3xl">R$ 100</Text>
          </View>
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">Frete</Text>
            <Text className="text-3xl">R$ 10</Text>
          </View>
          <View className="flex flex-row justify-between items-center border-b">
            <Text className="text-2xl">Total</Text>
            <Text className="text-3xl">R$ 110</Text>
          </View>
        </View>

        <TouchableOpacity className="mb-14 mt-8 bg-white flex items-center justify-center w-11/12 rounded-2xl">
          <Text className="text-[#074740] px-4 py-8 text-5xl">
            Finalizar Compra <Icon name="arrow-right" size={30} />
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* <View
        className="w-full min-h-full bg-slate-100 flex flex-col pb-10"
        style={{ paddingTop: statusBarHeight }}
      >
        <View className="w-11/12 flex items-end">
          <TouchableOpacity className="bg-[#074740] rounded-xl">
            <Text className="text-white text-2xl px-4 py-2">
              Voltar <Icon name="arrow-left" size={20} color={"#fff"} />
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-11/12 my-4">
          <Text className="text-center text-4xl">
            Selecione a Forma de Pagamento
          </Text>
        </View>
        <View className="w-full flex flex-col items-center justify-center">
          <View className="w-11/12 flex flex-row h-20 items-center justify-between border-y border-y-black">
            <View className="flex flex-row gap-5 items-center">
              <Icon name="qrcode" size={30} />
              <Text className="text-2xl uppercase">Pix</Text>
            </View>
            <Icon name="arrow-right" size={20} color={"#a1a1a1"} />
          </View>

          <View className="w-11/12 flex flex-row h-20 items-center justify-between">
            <View className="flex flex-row gap-5 items-center">
              <Icon name="credit-card" size={30} />
              <Text className="text-2xl uppercase">
                Cartão de Crédito/Débito
              </Text>
            </View>
            <Icon name="arrow-right" size={20} color={"#a1a1a1"} />
          </View>
          <View className="w-11/12 flex flex-row h-20 items-center justify-between border-y border-y-black">
            <View className="flex flex-row gap-5 items-center">
              <Icon name="barcode" size={30} />
              <Text className="text-2xl uppercase">Boleto</Text>
            </View>
            <Icon name="arrow-right" size={20} color={"#a1a1a1"} />
          </View>
        </View>
      </View> */}

      {/* <View
        style={{ paddingTop: statusBarHeight }}
        className="flex-1 flex items-center bg-white"
      >
        <View className="w-11/12 flex items-end">
          <TouchableOpacity className="bg-[#074740] rounded-xl">
            <Text className="text-white text-2xl px-4 py-2">
              Voltar <Icon name="arrow-left" size={20} color={"#fff"} />
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-4xl uppercase">Pix</Text>
        <QRCodePix />
      </View> */}

      <StripeProvider publishableKey="pk_test_51Pk7m8P9KYnbHtuSYkCfqkXMjAVjHaZJcTa9ItfjRtdxPrpsPEIlM0Nan2FkIks5VPTOPSu6HPx6Z2RvMdeHkHB400nw9mXkxD">
        <View className="flex-1 w-full h-full items-center justify-center">
          <PaymentCard />
        </View>
      </StripeProvider>
    </ScrollView>
  );
}
