//Css
import style from './Cart.module.css';

//Components
import { Btn } from '../../components/Btn'

export const Cart = () => {


   return (
      <section className={`${style.cart}`}>
         <div className="container">
            <h2>Carrinho</h2>
            <div className={`${style.cart_box} row g-5`}>

               <div className='col-5 col-md-4 col-lg-3'>
                  <div className={`${style.cart_card}`}>
                     <div className={`${style.img}`}>
                        <img src="" alt="" />
                     </div>
                     <div className={`${style.text}`}>
                        <h3>Produto</h3>
                        <p>preço</p>
                     </div>
                     <div className={`${style.btns} d-flex align-items-center justify-content-center`}>
                        <Btn className={`me-2 d-flex align-items-center justify-content-center`}>
                           -
                        </Btn>
                        <span className='me-2 d-flex align-items-center justify-content-center'>00</span>
                        <Btn className={`d-flex align-items-center justify-content-center`}>
                           +
                        </Btn>
                     </div>{/* btns */}
                  </div>{/* cart_card */}
               </div>

               <div className='col-5 col-md-4 col-lg-3'>
                  <div className={`${style.cart_card}`}>
                     <div className={`${style.img}`}>
                        <img src="" alt="" />
                     </div>
                     <div className={`${style.text}`}>
                        <h3>Produto</h3>
                        <p>preço</p>
                     </div>
                     <div className={`${style.btns} d-flex align-items-center justify-content-center`}>
                        <Btn className={`me-2 d-flex align-items-center justify-content-center`}>
                           -
                        </Btn>
                        <span className='me-2 d-flex align-items-center justify-content-center'>00</span>
                        <Btn className={`d-flex align-items-center justify-content-center`}>
                           +
                        </Btn>
                     </div>{/* btns */}
                  </div>{/* cart_card */}
               </div>

               <div className='col-5 col-md-4 col-lg-3'>
                  <div className={`${style.cart_card}`}>
                     <div className={`${style.img}`}>
                        <img src="" alt="" />
                     </div>
                     <div className={`${style.text}`}>
                        <h3>Produto</h3>
                        <p>preço</p>
                     </div>
                     <div className={`${style.btns} d-flex align-items-center justify-content-center`}>
                        <Btn className={`me-2 d-flex align-items-center justify-content-center`}>
                           -
                        </Btn>
                        <span className='me-2 d-flex align-items-center justify-content-center'>00</span>
                        <Btn className={`d-flex align-items-center justify-content-center`}>
                           +
                        </Btn>
                     </div>{/* btns */}
                  </div>{/* cart_card */}
               </div>

               <div className='col-5 col-md-4 col-lg-3'>
                  <div className={`${style.cart_card}`}>
                     <div className={`${style.img}`}>
                        <img src="" alt="" />
                     </div>
                     <div className={`${style.text}`}>
                        <h3>Produto</h3>
                        <p>preço</p>
                     </div>
                     <div className={`${style.btns} d-flex align-items-center justify-content-center`}>
                        <Btn className={`me-2 d-flex align-items-center justify-content-center`}>
                           -
                        </Btn>
                        <span className='me-2 d-flex align-items-center justify-content-center'>00</span>
                        <Btn className={`d-flex align-items-center justify-content-center`}>
                           +
                        </Btn>
                     </div>{/* btns */}
                  </div>{/* cart_card */}
               </div>

            </div>
         </div>

      </section>
   )
};