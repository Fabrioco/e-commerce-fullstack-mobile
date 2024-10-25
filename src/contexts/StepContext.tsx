import React, { Dispatch, SetStateAction, createContext } from "react";

// Interface para o contexto
interface RenderProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepContext = createContext<RenderProps | undefined>(undefined);

export const StepProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = React.useState<number>(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

import { useContext } from "react";

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep tem que ser usado dentro do StepProvider");
  }
  return context;
};
