import React from "react";
import { CartContent } from "./components/CartContent";
import { StepProvider } from "@/src/contexts/StepContext";
export default function Cart() {
  return (
    <StepProvider>
      <CartContent />
    </StepProvider>
  );
}
