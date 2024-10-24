import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRCodePix = () => {
  const chave = "11960168159";
  const nome = "Fabrício Oliveira Lopes";
  const cidade = "SAO PAULO";
  const valor = "0.000001";

  const payloadPix = generatePixPayload(chave, nome, cidade, valor);

  return (
    <View className="w-full flex flex-col items-center justify-center gap-4 bg-white">
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

function generatePixPayload(
  chave: string,
  nome: string,
  cidade: string,
  valor: string
) {
  const payload = `00020101021126360014BR.GOV.BCB.PIX0114${chave}5204000053039865802BR5910${nome}6009${cidade}5405${valor}62070503***6304`;
  return payload;
}

export default QRCodePix;
