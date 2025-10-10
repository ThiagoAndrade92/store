//React
import { createContext, useEffect, useReducer } from "react";

//CreateContext
export const ProductContext = createContext();

//Data
import { store } from "../../../data/products";

export const ProductProvider = ({children}) => {

   // Carregar do localStorage com proteção
   const loadLocalProducts = () => {
      try {
         const saved = localStorage.getItem('produtos');
         return saved ? JSON.parse(saved) : store.products;
      } catch {
         return store.products;
      }
   };

   //Function reducer
   const productReducer = (state, action) => {
      switch (action.type) {
         case "ADD":
            return [...state, action.payload];
         case "REMOVE":
            return state.filter(p => p.id !== action.payload);
         default:
           return state;
      }
   };

   //useReducer
   const [product, dispatchProduct] = useReducer(productReducer, loadLocalProducts());

   //Salvar no localStorage
   useEffect(() => {
      localStorage.setItem('produtos', JSON.stringify(product));
   }, [product]);

   return (
      <ProductContext.Provider value={{product, dispatchProduct}}>
         {children}
      </ProductContext.Provider>
   )
};