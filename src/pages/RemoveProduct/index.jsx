//Css
import style from './RemoveProduct.module.css';

//Hook
import { useProductContext } from '../../hook/useProductContext';

//Image
import Padrao from '../../assets/images/padrao.png'

//Components
import { Btn } from '../../components/Btn';
import { useState } from 'react';

export const RemoveProduct = () => {

   //Variaveis
   const [toggle, setToggle] = useState(false);

   //Hook
   const { product, dispatchProduct } = useProductContext();

   //Function remove
   const remove = (id) => {

      setToggle(true);

      setTimeout(() => {
         setToggle(false);
      },3000);

      dispatchProduct({type: "REMOVE", payload: id})

   };

   return (
      <section className={`${style.products}`}>
         <div className="container">

            {toggle ? (
               <div className={`${style.tooltip}`}>
                  <p>Produto removido!</p>
               </div>
            ): ''}

            <h2>Remover produto</h2>

            {product.map((p) => (
            <div className={`${style.products_box} d-flex align-items-center justify-content-center`} key={p.id}>
                  <div className={`${style.card} d-flex align-items-center justify-content-between p-2`}>
                     <div className={`${style.text} d-flex flex-column  align-items-center justify-content-between`}>
                        <h3>{p.name}</h3>
                        <p>Preço: R$ {p.price}</p>
                     <div className={`${style.btn}`}>
                        <Btn onClick={() => remove(p.id)}>Remover</Btn>
                     </div>
                     </div>{/* text */}
                     <div className={`${style.img}`}>
                        <img src={Padrao} alt={p.name} />
                     </div>
                  </div>{/* card */}
               </div>
            ))}
         </div>
      </section>
   )
};