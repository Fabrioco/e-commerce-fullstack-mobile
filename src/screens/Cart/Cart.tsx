import React from "react";
import { CartContent } from "./components/CartContent";
import { StepProvider } from "@/src/contexts/StepContext";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function Cart() {
  return (
    <StepProvider>
      <StripeProvider publishableKey="pk_test_51Pk7m8P9KYnbHtuSYkCfqkXMjAVjHaZJcTa9ItfjRtdxPrpsPEIlM0Nan2FkIks5VPTOPSu6HPx6Z2RvMdeHkHB400nw9mXkxD">
        <CartContent />
      </StripeProvider>
    </StepProvider>
  );
}
