//React router
import { Route, Routes } from "react-router-dom";

//pages
import { AddProduct } from "../../pages/AddProduct";
import { Products } from "../../pages/Products";
import { Cart } from "../../pages/Cart";

export const Mobile = () => {


   return (
      <>
         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/addProducts" element={<AddProduct />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </>
   )
};