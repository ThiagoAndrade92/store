//Css
import style from './Products.module.css';

//Hook
import { useProductContext } from '../../hook/useProductContext';

export const Products = () => {

   const { product, dispatchProduct } = useProductContext();

   return (
      <section className={`${style.products}`}>
         <div className="container">

            <h2>Produtos</h2>

            {product.map((p) => (
            <div className={`${style.products_box} row`} key={p.id}>
               <div className="col-12 col-md-6 col-lg-3">
                  <div className={`${style.card}`}>
                     <div className={`${style.img}`}>
                        {/* <img src="" alt={p.name} /> */}
                     </div>
                     <div className={`${style.text}`}>
                        <h3>{p.name}</h3>
                        <p>Preço: R$ {p.price}</p>
                     </div>
                  </div>
               </div>
            </div>
            ))}
         </div>
      </section>
   )
};