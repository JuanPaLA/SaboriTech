import React, { useContext } from 'react';
import { CartContext } from '../context';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import authService from '../../services/authentication/auth.service'


//Este componente es e menú superior. Debería tener otros botones que nos lleve a partes específicas de la página.
export default function Navigation() {

	const  { order, dishesCount, signout, isAuth } = useContext(CartContext);

	const logout = () => {
		authService.signOut();
		signout();
	}

	if(isAuth){
		return(
			<Navbar bg="light" variant="light">
			<Navbar.Brand href="/">SABORITECH</Navbar.Brand>
			<Nav style={{width: '85%'}}>
				<Link to="/" className="nav-link">Platillos</Link>
				<Link to="/order" className="nav-link">Órdenes {dishesCount() >= 0 ? dishesCount() : 0} </Link>
				{isAuth ? (
					<div className="btn btn-primary" onClick={logout.bind(this)} style={{marginLeft: 'auto'}}>
						Logout
					</div>
				):
				(
					<div>
					</div>
				)}
			</Nav>
		</Navbar>
		)
	}else{
		return(
			<Navbar bg="light" variant="light">
			<Navbar.Brand href="/">SABORITECH</Navbar.Brand>
			<Nav style={{width: '85%'}}>
				<Link to="/" className="nav-link">Platillos</Link>
				<Link to="/login" className="nav-link">Login</Link>

				{isAuth ? (
					<div className="btn btn-primary" onClick={logout.bind(this)} style={{marginLeft: 'auto'}}>
						Logout
					</div>
				):
				(
					<div>
					</div>
				)}
			</Nav>
		</Navbar>
		)
	}
}
