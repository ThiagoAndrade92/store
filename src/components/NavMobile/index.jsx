//Css
import style from './NavMobile.module.css';

//React router
import { NavLink } from 'react-router-dom';

//Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Icon
import {  faHome, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const NavMobile = () => {


   return (
      <nav className={`${style.nav} d-flex align-items-center justify-content-evenly d-md-none`}>
            <NavLink to='/createProducts' >
               <FontAwesomeIcon icon={faPlus} className={`${style.icon}`}/>
               <span>Criar</span>
            </NavLink>

            <NavLink to={'/'} >
               <FontAwesomeIcon icon={faHome} className={`${style.icon}`}/>
               <span>Home</span>
            </NavLink>

            <NavLink to={'/removeProduct'} >
               <FontAwesomeIcon icon={faMinus} className={`${style.icon}`}/>
               <span>Remover</span>
            </NavLink>
      </nav>
   )
};