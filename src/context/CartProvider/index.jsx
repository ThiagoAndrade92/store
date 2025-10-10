//React
import { createContext, useReducer, useEffect } from "react";

//CreateContext
export const CartContext = createContext();

//Data
import { store } from "../../../data/products";

export const CartProvider = ({children}) => {
   //Cart
   const initialCart = JSON.parse(localStorage.getItem('carrinho')) || store.cart || [];

   //Function Reducer
   const cartReducer = (state, action) => {
      switch (action.type) {
         case "ADD":
            const existe = state.find(p => p.id === action.payload.id);
            if (existe) {
               return state.map((p) => 
                  p.id === action.payload.id
                  ? {...p, qtd: p.qtd + 1}
                  : p
               )
            };
            return [...state, {...action.payload, qtd: 1}];
         case "REMOVE":
            return state.map(p => 
               p.id === action.payload.id
               ? {...p, qtd: p.qtd - 1}
               : p
            )
            .filter(p => p.qtd > 0);
         case "RESET":
            return [];
         default:
            return state;
      }
   };

   //useReducer
   const [cart, dispatchCart] = useReducer(cartReducer, initialCart);

    // Salvar no localStorage quando o carrinho mudar
   useEffect(() => {
      localStorage.setItem("carrinho", JSON.stringify(cart));
   }, [cart]);

   return (
      <CartContext.Provider value={{cart, dispatchCart}}>
         {children}
      </CartContext.Provider>
   )
   
};