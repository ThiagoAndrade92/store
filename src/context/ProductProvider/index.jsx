import { createContext, useReducer } from "react";

export const ProductContext = createContext();

import { store } from "../../../data/products";

export const ProductProvider = ({children}) => {

   const intialProducts = store.products;

   const productReducer = (state, action) => {
      switch (action.type) {

      }
   };

   const [product, dispatchProduct] = useReducer(productReducer, intialProducts );

   console.log(intialProducts)

   return (
      <ProductContext.Provider value={{product, dispatchProduct}}>
         {children}
      </ProductContext.Provider>
   )
};