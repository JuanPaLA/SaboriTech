import React from 'react';
import { useState, useEffect } from 'react';

//Creo contexto
export const CartContext = React.createContext([]);

//Creo la "clase" context con sus funciones y variables a compartir
const CartContextProvider = props => {
    
    const [order, setOrder] = useState([]);
    
    const addDish = (dish, count, price) => {
        const alreadyExists = (element) => element = dish;    
        let index = order.findIndex(alreadyExists);
        if(index === -1){
            setOrder([...order, {
                dish: dish, 
                quantity:count, 
                subTotal: price
            }])
        }if(index !== -1){
            var orders = order;
            orders[index] = {
                dish: orders[index].dish, 
                quantity: orders[index].quantity + count, 
                subTotal: orders[index].subTotal + price
            }
            setOrder(orders)
        }
    }

    // // Suma los productos (acc = acumulador) Recorre productos y suma quantity (cantidad)
    function dishesCount(){
        return order.length;
    };

    useEffect(()=>{
        console.log(order);
    },[order])
  
    
  
    // // Elimina producto del array. Busca el indice y elimina 1
    // const delProduct = id => {
    //   products.splice(products.findIndex(p => p.id === id), 1);
    //   setProducts([...products]);
    // };
  
    // // Importe total
    // const getGrandTotal = () => {
    //   return products.reduce((acc, p) => (acc += p.price * p.quantity), 0);
    // };
  
    // useEffect(() => {
    //   setLong(products.length);
    // }, [products]);
  
    return (
      <CartContext.Provider
        value={
          {order,
          addDish,
          dishesCount}
        }
      >
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;
  