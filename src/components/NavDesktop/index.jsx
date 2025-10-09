//Css
import style from './NavDesktop.module.css';

//React router
import { NavLink } from "react-router-dom";

export const NavDesktop = () => {


   return (
      <nav className={`${style.nav_desktop} d-flex align-items-center flex-column`}>

         <NavLink to='/'>
            Produtos
         </NavLink>
         

         <NavLink to='/createProducts'>
            Adicionar produto
         </NavLink>

         <NavLink to='/removeProduct'>
            Remover produto
         </NavLink>

      </nav>
   )
};