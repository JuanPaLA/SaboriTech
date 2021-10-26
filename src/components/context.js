import React, { useState, useEffect } from 'react';

//Creo contexto
export const CartContext = React.createContext({
  isAuth: false,
  login: () => {},
});

//Creo la "clase" context con sus funciones y variables a compartir
const CartContextProvider = props => {
    
    const [order, setOrder] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("userAuth") || false
    );
    const [user, setUser] = useState(
      localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    );
    
    function addDish  (dish, count, price) {
      const index = order.findIndex((item) => item.dish === dish)
        index === -1 ? setOrder([...order, {dish: dish, quantity:count, subTotal: price * count}]) : console.log('--');
        
        if(index !== -1){
          let newOrder = [...order];
          newOrder[index].quantity += count;
          newOrder[index].subTotal += count * price;
          setOrder(newOrder)
        }
    }

    // Returns amount of differents added dishes to order
    function dishesCount(){
        
        if(order.length > 0){
          return order.length;
        }else{
          return 0;
        }
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

    //Login Context
    const loginHandler = () => {
      setIsAuthenticated(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    useEffect(() => {
      setIsAuthenticated(localStorage.getItem("userAuth"));
    }, [isAuthenticated]);

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")));
    }, [user]);

    const signoutHandler = () => {
      setIsAuthenticated(false);
    };


    return (
      <CartContext.Provider
        value={
          {
            order,
            addDish,
            dishesCount,
            delDish,
            getTotalOrder,
            setOrder,
            //Login Variables
            login: loginHandler,
            signout: signoutHandler,
            isAuth: isAuthenticated,
            user,
          }
        }
      >
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;
  