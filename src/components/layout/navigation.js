import React, { useContext } from 'react';
import { CartContext } from '../context';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

//Este componente es e menú superior. Debería tener otros botones que nos lleve a partes específicas de la página.
export default function Navigation() {
  	const  {order, dishesCount} = useContext(CartContext);

	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="/">SABORITECH</Navbar.Brand>
			<Nav>
				<Link to="/" className="nav-link">Platillos</Link>
				<Link to="/order" className="nav-link">Órdenes ({dishesCount()})</Link>
				<Link to="/login" className="nav-link">Login</Link>
			</Nav>
		</Navbar>
	);
}
