import { useListCart } from "@/src/contexts/ListCartContext";
import { useStep } from "@/src/contexts/StepContext";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

const PaymentPix = () => {
  const { setStep } = useStep();
  const { value, shipping } = useListCart();

  const [valor, setValor] = React.useState<number>(0);

  React.useEffect(() => {
    setValor(value + shipping);
    console.log(valor);
  }, [value, shipping]);

  const payloadPix = generatePixPayload(valor);

  return (
    <View className="flex-1 w-full flex flex-col items-center justify-center gap-4 bg-white relative">
      <TouchableOpacity
        onPress={() => setStep(1)}
        className="bg-[#074740] rounded-md absolute top-10 right-10"
      >
        <Text className="text-3xl text-white px-4 py-2">Voltar</Text>
      </TouchableOpacity>
      <Text className="text-3xl">QR CODE Para Pagamento</Text>
      <QRCode value={payloadPix} size={200} />
      <Text className="text-3xl">PIX Copia e Cola</Text>
      <View className="bg-slate-100">
        <Text className="px-6 py-4">{payloadPix}</Text>
      </View>
      <TouchableOpacity className="bg-[#074740] rounded-xl">
        <Text className="px-8 py-4 text-4xl text-white">Copiar Pix</Text>
      </TouchableOpacity>
      <Text className="text-3xl">Total a Pagar: R${valor}</Text>
    </View>
  );
};

function generatePixPayload(valor: number) {
  const payload = `00020101021126360014BR.GOV.BCB.PIX0114119601681595204000053039865802BR5910Fabrício Oliveira Lopes6009SAO PAULO5405${valor}62070503***6304`;
  return payload;
}

export default PaymentPix;
