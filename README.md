# 🛒 Mini Loja React com Context API + Reducer

Um projeto completo de carrinho de compras desenvolvido com **React**, utilizando **Context API**, **useReducer** e **LocalStorage**, com interface adaptada para **Mobile e Desktop**.

## 🚀 Funcionalidades

* ✅ Listagem de produtos
* ➕ Adicionar produto ao carrinho
* ➖ Remover quantidade ou item do carrinho
* 🗑️ Resetar carrinho
* 💾 Persistência com LocalStorage
* 🧭 Navegação com React Router
* 📱 Layout responsivo (Mobile & Desktop)

## 🛠️ Tecnologias Utilizadas

| Tecnologia               | Uso                            |
| ------------------------ | ------------------------------ |
| React                    | Biblioteca principal           |
| Context API + useReducer | Gerenciamento de estado global |
| React Router DOM         | Sistema de rotas               |
| LocalStorage             | Persistência de dados          |
| CSS Modules              | Estilização isolada            |

## 📂 Estrutura do Projeto (exemplo)

```
src/
 ├─ components/
 ├─ context/
 │   ├─ CartContext.jsx
 │   └─ ProductContext.jsx
 ├─ pages/
 │   ├─ Products/
 │   ├─ AddProduct/
 │   ├─ Cart/
 │   └─ RemoveProduct/
 ├─ data/
 │   └─ products.js
 └─ App.jsx
```

## 🔄 Context + Reducer (Exemplo do Carrinho)

```js
const initialCart = JSON.parse(localStorage.getItem('carrinho')) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existe = state.find(p => p.id === action.payload.id);
      if (existe) {
        return state.map(p =>
          p.id === action.payload.id
            ? { ...p, qtd: p.qtd + 1 }
            : p
        );
      }
      return [...state, { ...action.payload, qtd: 1 }];
    case "REMOVE":
      return state
        .map(p =>
          p.id === action.payload.id
            ? { ...p, qtd: p.qtd - 1 }
            : p
        )
        .filter(p => p.qtd > 0);
    case "RESET":
      return [];
    default:
      return state;
  }
};
```

## 💾 Salvando no LocalStorage

```js
useEffect(() => {
  localStorage.setItem("carrinho", JSON.stringify(cart));
}, [cart]);
```

## 💡 Melhorias Futuras

* 🔍 Busca de produtos
* ✏️ Edição de produtos
* 💰 Formatação de preço (Intl)
* 🛒 Cálculo de total do carrinho

## 🎨 Layout

* Interface separada para **Mobile** e **Desktop**
* Componentes reutilizáveis (Botões, Inputs, Nav, etc.)
