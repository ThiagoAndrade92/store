//Css
import style from './AddProduct.module.css';

//React
import { useState } from 'react';

//Components
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';

//Hook
import { useProductContext } from '../../hook/useProductContext';

export const AddProduct = () => {

   //Hook
   const { dispatchProduct } = useProductContext();

   //Variaveis
   const [nameProduct, setNameProduct] = useState('');
   const [price, setPrice] = useState('');
   const [erroName, setErroName] = useState('');
   const [erroPrice, setErroPrice] = useState('');
   const [toggle, setToggle] = useState(false);

   //Submit
   const handleSubmit = (e) => {
      e.preventDefault();

      if(!nameProduct.trim()) {
         setErroName('Campo obrigatório!');
         return;
      } else {
      setErroName('');
      }

      if (!price.trim() || parseFloat(price) <= 0) {
         setErroPrice('Campo obrigatório!');
         return;
      } else {
         setErroPrice('');
      }


      const newProduct = {
         id: Date.now(),
         name: nameProduct,
         price: parseFloat(price) || 0
      };

      dispatchProduct({type: "ADD", payload: newProduct});

      setToggle(true);

      setTimeout(() =>{
         setToggle(false)
      }, 3000);

      setNameProduct('');
      setPrice('');
   };


   return (
      <section className={`${style.addproduct}`}>

         {toggle ? (<div className={`${style.aviso} text-center`}>
               <p>Produto criado</p>
         </div>) : ''}
         

         <div className="container d-flex align-items-center justify-content-center">

           <form onSubmit={handleSubmit}>
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
               <span className={`${style.erro}`}>{erroName}</span>
            </div>{/* labels */}
            

            <div className={`${style.labels}`}>
               <Label>
                  Preço:
                  <div className={`${style.inputs}`}>
                     <Input 
                     type="number" 
                     value={price}
                     onChange={e => setPrice(e.target.value)}
                     placeholder='Digite o preço do produto'
                     />
                  </div>
               </Label>
               <span className={`${style.erro}`}>{erroPrice}</span>
            </div>{/* labels */}

               <div className={style.btn}>
                  <input type="submit" value='Criar'/>
               </div>
           </form>

         </div>{/* container */}

      </section>
   )
};