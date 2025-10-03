//React router
import { Route, Routes } from "react-router-dom";

//pages
import { AddProduct } from "../../pages/AddProduct";
import { Products } from "../../pages/Products";
import { Cart } from "../../pages/Cart";
import { NavMobile } from "../../components/NavMobile";

export const Mobile = () => {


   return (
      <>
      <NavMobile />
         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/createProducts" element={<AddProduct />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </>
   )
};