//React router
import { Route, Routes } from "react-router-dom";

//Components
import { NavMobile } from "../../components/NavMobile";

//pages
import { AddProduct } from "../../pages/AddProduct";
import { Products } from "../../pages/Products";
import { Cart } from "../../pages/Cart";
import { RemoveProduct } from "../../pages/RemoveProduct";

export const Mobile = () => {


   return (
      <div className="d-md-none">
      <NavMobile />
         <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/createProducts" element={<AddProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/removeProduct" element={<RemoveProduct />} />
         </Routes>
      </div>
   )
};