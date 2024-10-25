import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getStatusBarHeight } from "react-native-status-bar-height";
import { useStep } from "@/src/contexts/StepContext";

const statusBarHeight = getStatusBarHeight();
export const RenderPaymentOptions = () => {
  const { setStep } = useStep()
  return (
    <View
      className="w-full min-h-full bg-slate-100 flex flex-col pb-10"
      style={{ paddingTop: statusBarHeight }}
    >
      <View className="w-11/12 flex items-end">
        <TouchableOpacity
          className="bg-[#074740] rounded-xl"
          onPress={() => setStep(0)}
        >
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
          <TouchableOpacity onPress={() =>setStep(2)}>
            <Icon name="arrow-right" size={30} color={"#a1a1a1"} />
          </TouchableOpacity>
        </View>
        <View className="w-11/12 flex flex-row h-20 items-center justify-between border-b">
          <View className="flex flex-row gap-5 items-center">
            <Icon name="credit-card" size={30} />
            <Text className="text-2xl uppercase">Cartão de Crédito/Débito</Text>
          </View>
          <TouchableOpacity onPress={() => setStep(3)}>
            <Icon name="arrow-right" size={30} color={"#a1a1a1"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
