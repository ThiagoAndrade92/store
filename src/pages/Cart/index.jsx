//Css
import style from './Cart.module.css';

//Hook
import { useCartContext } from '../../hook/useCartContext';

//Components
import { Btn } from '../../components/Btn';

//Image
import Padrao from '../../assets/images/padrao.png';
import { useState } from 'react';

export const Cart = () => {

   //Function reset
   const reset = () => {
      dispatchCart({ type: "RESET" })
   };

   //Data
   const { cart, dispatchCart } = useCartContext();

   //Variaveis
   const total = cart.reduce((acc, item) => acc + item.price * item.qtd, 0);
   const [comprou, setComprou] = useState(false);

   //function remove
   const remove = (item) => {
      dispatchCart({ type: "REMOVE", payload: item });
   }

   //Function finalizar
   const finalizar = () => {
      setComprou(true);

      setTimeout(() => {
         setComprou(false);
      }, 3000);

      dispatchCart({ type: "RESET" })
   }

   return (
      <section className={`${style.cart}`}>
         <div className="container">

            {/* comprou */}
            {comprou ? (
               <div className={`${style.comprou}`}>
                  <p className='d-flex align-items-center justify-content-center'>Obrigado pela preferência 🥰!</p>
               </div>
            ) : ''}


            <div className={`${style.top} d-flex align-items-center justify-content-between`}>
               <h2>Carrinho</h2>
               <Btn onClick={reset}>Limpar</Btn>
            </div>
            <div className={`${style.cart_box}`}>

               {/* Cart vazio */}
               {cart.length === 0 ? (
                  <p className={`${style.vazio} text-center`}>Seu carrinho está vazio!</p>
               ) : ''}

               {cart.map((item) => (
                  <div className={`${style.cart_card} mb-2 d-flex align-items-center justify-content-between`} key={item.id}>
                     <div className={`${style.img}`}>
                        <img src={Padrao} alt={item.name} />
                     </div>
                     <div className={`${style.text}`}>
                        <h3>{item.name}</h3>
                        <p>R$: {item.price}</p>
                     </div>
                     <div className={`${style.btns} d-flex align-items-center justify-content-center p-2`}>
                        <Btn className={`me-2 d-flex align-items-center justify-content-center`}
                           onClick={() => remove(item)}
                        >
                           -
                        </Btn>
                        <span className='me-2 d-flex align-items-center justify-content-center'>{item.qtd}</span>
                        <Btn className={`d-flex align-items-center justify-content-center`}
                           onClick={() => dispatchCart({ type: "ADD", payload: item })}>
                           +
                        </Btn>
                     </div>{/* btns */}
                  </div>
               ))}

            </div>{/* cart_box */}

            {cart.length > 0 ? (
               <footer className={`${style.footer} p-2 d-flex align-items-center justify-content-around`}>
                  <div className={`${style.total} d-flex align-items-center justify-content-between`}>
                     <p>TOTAL:</p>
                     <span>R$ {total}</span>
                  </div>
                  <Btn
                     onClick={finalizar}
                  >Finalizar</Btn>
               </footer>
            ) : ''}

         </div>{/* container */}


      </section>
   )
};