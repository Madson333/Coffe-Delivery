import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export function UseCart() {
  const context = useContext(CartContext);
  return context
}