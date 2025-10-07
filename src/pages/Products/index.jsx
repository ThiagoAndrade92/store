//Css
import style from './Products.module.css';

//Hook
import { useProductContext } from '../../hook/useProductContext';
import { useCartContext } from '../../hook/useCartContext';

//Image
import Padrao from '../../assets/images/padrao.png'

//Components
import { Btn } from '../../components/Btn';
import { NavLink } from 'react-router-dom';

//React
import { useState } from 'react';


export const Products = () => {

   //Hook
   const { product } = useProductContext();
   const { cart, dispatchCart } = useCartContext();

   //Variaveis
   const [toggle, setToggle] = useState(false);
   const total = cart.reduce((acc, item) => acc + item.qtd, 0);

   //Function AddProduct
   const addProduct = (p) => {
      dispatchCart({ type: "ADD", payload: p })

      setToggle(true);
      setTimeout(() => {
         setToggle(false);
      }, 3000)
   };


   return (
      <section className={`${style.products}`}>
         <div className="container">
            {toggle ? (
               <div className={`${style.tooltip}`}>
                  <p>Produto adicionado!</p>
               </div>
            ) : ''}

            <h2>Produtos</h2>

            {product.map((p) => (
               <div className={`${style.products_box} d-flex align-items-center justify-content-center`} key={p.id}>
                  <div className={`${style.card} d-flex align-items-center justify-content-between p-2`}>
                     <div className={`${style.text} d-flex flex-column  align-items-center justify-content-between`}>
                        <h3>{p.name}</h3>
                        <p>Preço: R$ {p.price}</p>
                        <div className={`${style.btn}`}>
                           
                           <Btn
                              onClick={() => addProduct(p)}
                           >Adicionar</Btn>
                        </div>
                     </div>{/* text */}
                     <div className={`${style.img}`}>
                        <img src={Padrao} alt={p.name} />
                     </div>
                  </div>{/* card */}
               </div>
            ))}

            {cart.length !== 0 ? (
               <footer className={`${style.footer}`}>
                  <div className={`${style.box}`}>
                     <NavLink to={'/cart'}>
                        <div className={`${style.total}`}>{total}</div> Ver carrinho</NavLink>
                  </div>
               </footer>
            ) : ''}

         </div>
      </section>
   )
};