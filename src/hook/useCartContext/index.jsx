//React
import { useContext } from "react";

//CartContext
import { CartContext } from "../../context/CartProvider";

export const useCartContext = () => {
   return useContext(CartContext);
};