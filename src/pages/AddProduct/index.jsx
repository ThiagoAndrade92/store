//Css
import { useState } from 'react';
import style from './AddProduct.module.css';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';


export const AddProduct = () => {

   //Variaveis
   const [nameProduct, setNameProduct] = useState('')
   const [price, setPrice] = useState('')


   return (
      <section className={`${style.addproduct}`}>

         <div className="container d-flex align-items-center justify-content-center">

           <form>
            <h2>Adicionar Produtos</h2>

            <div className={`${style.labels}`}>
               <Label>
                  Nome produto:
                  <div className={`${style.inputs}`}>
                     <Input 
                     type="text" 
                     value={nameProduct}
                     onChange={e => setNameProduct(e.target.value)}
                     placeholder='Digite o nome do produto'
                     />
                  </div>
               </Label>
            </div>{/* labels */}
            

            <div className={`${style.labels}`}>
               <Label>
                  Preço:
                  <div className={`${style.inputs}`}>
                     <Input 
                     type="text" 
                     value={price}
                     onChange={e => setPrice(e.target.value)}
                     placeholder='Digite o preço do produto'
                     />
                  </div>
               </Label>
            </div>{/* labels */}

               <div className={style.btn}>
                  <input type="submit" value='Criar'/>
               </div>
           </form>

         </div>{/* container */}

      </section>
   )
};