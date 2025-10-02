//Css
import style from './Products.module.css';

//Hook
import { useProductContext } from '../../hook/useProductContext';

//Image
import Padrao from '../../assets/images/padrao.png'

//Components
import { Btn } from '../../components/Btn';

export const Products = () => {

   //Hook
   const { product, dispatchProduct } = useProductContext();

   return (
      <section className={`${style.products}`}>
         <div className="container">

            <h2>Produtos</h2>

            {product.map((p) => (
            <div className={`${style.products_box} d-flex align-items-center justify-content-center`} key={p.id}>
                  <div className={`${style.card} d-flex align-items-center justify-content-between p-2`}>
                     <div className={`${style.text} d-flex flex-column  align-items-center justify-content-between`}>
                        <h3>{p.name}</h3>
                        <p>Preço: R$ {p.price}</p>
                     <div className={`${style.btn}`}>
                        <Btn>Adicionar</Btn>
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