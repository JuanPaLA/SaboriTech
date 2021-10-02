import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context';

//Este componente es e menú superior. Debería tener otros botones que nos lleve a partes específicas de la página.
export default function Nav() {
  const  {order, dishesCount} = useContext(CartContext);

  return (
    <div className="nav">
      <Link to={'/'}>
        <h2>Home</h2>
      </Link>
      <Link to={'/order'}>
        Órdenes{' '}
        <span>
          {dishesCount()}
        </span>
      </Link>
    </div>
  );
}
