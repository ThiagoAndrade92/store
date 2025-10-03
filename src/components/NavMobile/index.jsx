//Css
import style from './NavMobile.module.css';

//React router
import { NavLink } from 'react-router-dom';

//Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Icon
import { faBan, faHome, faMinus, faPlus, faPlusCircle, faTimes, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const NavMobile = () => {


   return (
      <nav className={`${style.nav} d-flex align-items-center justify-content-evenly d-md-none`}>
            <NavLink to='/createProducts' >
               <FontAwesomeIcon icon={faPlus} className={`${style.icon}`}/>
            </NavLink>

            <NavLink to={'/'} >
               <FontAwesomeIcon icon={faHome} className={`${style.icon}`}/>
            </NavLink>

            <NavLink to={'/removeProduct'} >
               <FontAwesomeIcon icon={faMinus} className={`${style.icon}`}/>
            </NavLink>
      </nav>
   )
};