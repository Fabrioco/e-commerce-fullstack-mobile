import { useStep } from "@/src/contexts/StepContext";
import { RenderCart } from "../RenderCart";
import { RenderPaymentOptions } from "../RenderPaymentOptions";
import PaymentPix from "../PaymentPix";
import PaymentCard from "../PaymentCard";

export const CartContent = () => {
  const { step } = useStep();

  if (step === 0) return <RenderCart />;
  if (step === 1) return <RenderPaymentOptions />;
  if (step === 2) return <PaymentPix />;
  if (step === 3) return <PaymentCard />;
};
