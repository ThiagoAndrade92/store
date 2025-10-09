//Css
import style from './Desktop.module.css';

//React
import { Route, Routes } from "react-router-dom";

//Components
import { NavDesktop } from "../../components/NavDesktop";

//Pages
import { Products } from "../../pages/Products";
import { AddProduct } from "../../pages/AddProduct";
import { Cart } from "../../pages/Cart";
import { RemoveProduct } from "../../pages/RemoveProduct";

export const Desktop = () => {


   return (
      <div className='d-none d-md-block'>
         <div className={`${style.desktop} d-flex`}>
            <NavDesktop />
            <div className={`${style.conteudo}`}>
               <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/createProducts" element={<AddProduct />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path="/removeProduct" element={<RemoveProduct />} />
               </Routes>
            </div>
         </div>
      </div>
   )
};