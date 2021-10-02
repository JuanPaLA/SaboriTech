import React, { useContext } from 'react';
import { CartContext } from '../context';
import { Navbar, Nav } from 'react-bootstrap';

//Este componente es e menú superior. Debería tener otros botones que nos lleve a partes específicas de la página.
export default function Navigation() {
  	const  {order, dishesCount} = useContext(CartContext);

	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="/">SABORITECH</Navbar.Brand>
			<Nav>
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/login">Login</Nav.Link>
				<Nav.Link href="/order">Órdenes ({dishesCount()})</Nav.Link>
			</Nav>
		</Navbar>
	);
}
