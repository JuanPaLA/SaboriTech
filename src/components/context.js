import React from 'react';
import { useState, useEffect } from 'react';

//Creo contexto
export const CartContext = React.createContext([]);

//Creo la "clase" context con sus funciones y variables a compartir
const CartContextProvider = props => {
    
    const [order, setOrder] = useState([]);
    
    function addDish (dish, count, price) {
      const index = order.findIndex((item) => item.dish === dish)
        index === -1 ? setOrder([...order, {dish: dish, quantity:count, subTotal: price}]) : console.log('--');
        
        if(index !== -1){
          let newOrder = [...order];
          newOrder[index].quantity += count;
          newOrder[index].subTotal += price;
          setOrder(newOrder)
        }
    }

    // Returns amount of differents added dishes to order
    function dishesCount(){
        return order.length;
    };

    // Delete dish from order
    const delDish = dish => {
      order.splice(order.findIndex(p => p.dish === dish), 1);
      setOrder([...order]);
    };
  
    // // Importe total
    const getTotalOrder = () => {
      return order.reduce((acc, p) => (acc += p.subTotal), 0);
    };
  
    useEffect(()=>{
      console.log(order);
    },[order])

    return (
      <CartContext.Provider
        value={
          {
            order,
            addDish,
            dishesCount,
            delDish,
            getTotalOrder
          }
        }
      >
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;
  