//React
import { createContext, useReducer } from "react";

//CreateContext
export const ProductContext = createContext();


//Data
import { store } from "../../../data/products";

export const ProductProvider = ({children}) => {

   //Initial value
   const intialProducts = store.products;

   //Function reducer
   const productReducer = (state, action) => {
      switch (action.type) {

      }
   };

   //useReducer
   const [product, dispatchProduct] = useReducer(productReducer, intialProducts );

   console.log(intialProducts)

   return (
      <ProductContext.Provider value={{product, dispatchProduct}}>
         {children}
      </ProductContext.Provider>
   )
};