import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

export const useProductContext = () => {
   return useContext(ProductContext);
};