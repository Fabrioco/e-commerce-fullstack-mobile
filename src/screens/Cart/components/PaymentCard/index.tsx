import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {
  CardField,
  useStripe,
  CardFieldInput,
} from "@stripe/stripe-react-native";
import axios from "axios";

const PaymentCard = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState<CardFieldInput.Details | null>(
    null
  );
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const value = 1000;

  const handlePayment = async () => {
    if (!cardDetails?.complete) {
      setPaymentError("Por favor, preencha os detalhes do cartão.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://backend-commerce-9f7a1c0386d2.herokuapp.com/create-payment-intent",
        { amount: value }
      );

      const { error, paymentIntent } = await confirmPayment(data.clientSecret, {
        paymentMethodType: "Card",
        paymentMethodData: {
          billingDetails: {
            name: "Usuário",
          },
        },
      });

      if (error) {
        setPaymentError(error.message);
        Alert.alert("Erro", "Algo deu errado: " + error.message);
      } else if (paymentIntent && paymentIntent.status) {
        setPaymentSuccess(
          `Pagamento concluído. Código do pedido: ${paymentIntent.id}`
        );
        Alert.alert("Sucesso", "Pagamento realizado com sucesso!");
      }
    } catch (error) {
      console.log(error);
      setPaymentError("Erro ao processar pagamento.");
    }
  };

  return (
    <View className="w-11/12 p-4 rounded-lg flex flex-col items-center justify-center bg-white">
      <CardField
        postalCodeEnabled={false}
        onCardChange={(details) => {
          setCardDetails(details);
        }}
        style={{
          width: 300,
          height: 100,
        }}
      />

      <TouchableOpacity
        className="bg-[#074740] rounded-full"
        onPress={handlePayment}
      >
        <Text className="text-3xl px-4 py-2 text-white uppercase">
          Confirmar
        </Text>
      </TouchableOpacity>

      {paymentError ? (
        <Text className="text-2xl text-red-600 mt-4">{paymentError}</Text>
      ) : null}
      {paymentSuccess ? (
        <Text className="text-2xl text-green-600 mt-4">{paymentSuccess}</Text>
      ) : null}
    </View>
  );
};

export default PaymentCard;
