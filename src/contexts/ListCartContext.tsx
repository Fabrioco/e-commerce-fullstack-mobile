import React, { SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";

export interface ListCartProps {
  id: number;
  name: string;
  categoria?: string;
  price: number;
  image: ImageSourcePropType;
  offer?: boolean;
  offerPrice?: number;
  popular?: boolean;
  new?: boolean;
}

interface ListCartInterface {
  listCart: ListCartProps[] | null;
  setListCart: React.Dispatch<SetStateAction<ListCartProps[] | null>>;

  shipping: number;

  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}
const shipping = 10;

const ListCartContext = React.createContext<ListCartInterface | undefined>(
  undefined
);

export const ListCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [listCart, setListCart] = React.useState<ListCartProps[] | null>(null);
  const [value, setValue] = React.useState<number>(0);

  return (
    <ListCartContext.Provider
      value={{ listCart, setListCart, shipping, value, setValue }}
    >
      {children}
    </ListCartContext.Provider>
  );
};

export const useListCart = () => {
  const cartContext = React.useContext(ListCartContext);
  if (!cartContext) {
    throw new Error("useListCart deve ser usado dentro do ListCartProvider");
  }
  return cartContext;
};
