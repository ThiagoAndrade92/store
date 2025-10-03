//Css
import style from './Cart.module.css';

//Data
import { store } from '../../../data/products';

//Components
import { Btn } from '../../components/Btn';

//Image
import Padrao from '../../assets/images/padrao.png';

export const Cart = () => {

   //Data
   const cart = store.cart;

   return (
      <section className={`${style.cart}`}>
         <div className="container">
            <div className={`${style.top} d-flex align-items-center justify-content-between`}>
               <h2>Carrinho</h2>
               <Btn>Limpar</Btn>
            </div>
            <div className={`${style.cart_box}`}>

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
                           <Btn className={`me-2 d-flex align-items-center justify-content-center`}>
                              -
                           </Btn>
                           <span className='me-2 d-flex align-items-center justify-content-center'>{item.qtd}</span>
                           <Btn className={`d-flex align-items-center justify-content-center`}>
                              +
                           </Btn>
                        </div>{/* btns */}
                     </div>
               ))}

            </div>{/* cart_box */}
         <footer className={`${style.footer} p-2 d-flex align-items-center justify-content-around`}>
               <div className={`${style.total} d-flex align-items-center justify-content-between`}>
                  <p>TOTAL:</p>
                  <span>0000</span>
               </div>
               <Btn>Finalizar</Btn>
         </footer>
         </div>{/* container */}


      </section>
   )
};