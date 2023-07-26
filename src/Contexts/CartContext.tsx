import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartItemsTotal: number;
  cartQuantity: number;
  AddCoffeToCart: (coffe: CartItem) => void;
  ChangeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    };
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, CartItem) => {
    return total + CartItem.price * CartItem.quantity;
  }, 0)

  function AddCoffeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsCart].quantity += coffee.quantity;
      }
    })
    setCartItems(newCart);
  }

  function ChangeCartItemQuantity(cartItemId: number, type: "increase" | "decrease") {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
      if (coffeExistsInCart >= 0) {
        const item = draft[coffeExistsInCart];
        draft[coffeExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    })
    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
      const coffeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
      if (coffeExistsInCart >= 0) {
        draft.splice(coffeExistsInCart, 1)
      }
    })
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, ChangeCartItemQuantity, AddCoffeToCart, removeCartItem, cleanCart, cartItemsTotal }}>
      {children}
    </CartContext.Provider>
  )
}