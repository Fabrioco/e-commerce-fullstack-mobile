import { TextInput, TouchableOpacity } from "react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();

export default function Informations() {
  return (
    <ScrollView
      className="bg-[#074740]"
      style={{ paddingTop: statusBarHeight }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full h-full flex flex-col justify-center items-center">
        <Text className="w-full text-3xl text-white text-center border-b border-white pb-2">
          Nossa Equipe
        </Text>

        <View className="w-11/12 flex flex-col justify-center items-center mt-4 gap-4 pb-8">
          <View className="w-full h-44 flex flex-row bg-gray-200 px-4 py-2 rounded-md items-center justify-between">
            <Image
              source={require("../../assets/images/profissional1.jpg")}
              className="w-40 h-40 rounded-full"
            />
            <View className="w-1/2">
              <Text className="text-3xl">Godofredo Moreira Líbano</Text>
              <Text className="italic font-bold text-xl">Personal Stylist</Text>
              <Text>
                Ajudando os clientes a escolher peças que combinem com seu
                estilo pessoal e ocasiões específicas.
              </Text>
            </View>
          </View>

          <View className="w-full h-44 flex flex-row bg-gray-200 px-4 py-2 rounded-md items-center justify-between">
            <Image
              source={require("../../assets/images/profissional2.jpg")}
              className="w-40 h-40 rounded-full"
            />
            <View className="w-1/2">
              <Text className="text-3xl">Angelica Souza Silva</Text>
              <Text className="italic font-bold text-xl">
                Analista de Marketing Digital
              </Text>
              <Text>
                Gerando tráfego e promovendo a marca em plataformas digitais
                para atrair mais clientes.
              </Text>
            </View>
          </View>

          <View className="w-full h-44 flex flex-row bg-gray-200 px-4 py-2 rounded-md items-center justify-between">
            <Image
              source={require("../../assets/images/profissional3.jpg")}
              className="w-40 h-40 rounded-full"
            />
            <View className="w-1/2">
              <Text className="text-3xl">Renata Oliveira</Text>
              <Text className="italic font-bold text-xl">
                Especialista em E-commerce
              </Text>
              <Text>
                Gerenciando a loja online para garantir uma experiência de
                compra fluida e eficiente.
              </Text>
            </View>
          </View>

          <View className="w-full h-44 flex flex-row bg-gray-200 px-4 py-2 rounded-md items-center justify-between">
            <Image
              source={require("../../assets/images/profissional4.jpg")}
              className="w-40 h-40 rounded-full"
            />
            <View className="w-1/2">
              <Text className="text-3xl">Fábio Monteiro</Text>
              <Text className="italic font-bold text-xl">
                Coordenador de Eventos
              </Text>
              <Text>
                Organizando eventos e promoções para atrair novos clientes e
                criar experiências únicas.
              </Text>
            </View>
          </View>

          <View className="w-full h-44 flex flex-row bg-gray-200 px-4 py-2 rounded-md items-center justify-between">
            <Image
              source={require("../../assets/images/profissional5.jpg")}
              className="w-40 h-40 rounded-full"
            />
            <View className="w-1/2">
              <Text className="text-3xl">Fabiana Almeida</Text>
              <Text className="italic font-bold text-xl">
                Analista de Dados de Vendas
              </Text>
              <Text>
                Utilizando dados de vendas para prever tendências e ajustar as
                estratégias da loja.
              </Text>
            </View>
          </View>
        </View>

        <View className="pb-10 flex flex-col w-full h-auto items-center justify-center bg-white">
          <View className="w-1/2 flex flex-col items-center justify-center mt-10 bg-slate-300 rounded-full">
            <Image
              source={require("../../assets/images/vestido3.png")}
              className="w-full h-80"
            />
          </View>
          <Text className="w-full text-5xl text-[#074740] text-center border-y border-white py-2 mt-12">
            Nosso Jornal
          </Text>
          <Text className=" px-4 py-4 w-8/12 mt-4 text-2xl text-justify rounded-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>

          <View className="w-10/12 h-20 bg-gray-300 flex flex-row items-center justify-around rounded-full">
            <TextInput
              placeholder="Seu melhor Email"
              className="5/6 h-full text-3xl"
            />
            <TouchableOpacity className="1/12 bg-[#074740] rounded-full">
              <Text className="px-8 py-4 text-2xl text-white">Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
