import './App.css';
import React from 'react';
import DishListContainer from './components/functionals/dishListContainer';
import DishDetailContainer from './components/functionals/dishDetailContainer';
import Navigation from './components/layout/navigation';
import Login from './components/functionals/login';
import Signup from './components/functionals/signup';
import Order from './components/functionals/order';
import DishForm from './components/functionals/dishform';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import {CartContext} from './components/context';

//Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const context = React.useContext(CartContext);
	
	//Routes if not logged in
	let routes = (
		<Switch>
			<div className="page-content">
				<Route exact path="/" component={DishListContainer} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/dishdetail/:id" component={DishDetailContainer} />
				<Redirect to="/" />
			</div>
		</Switch>
	);

	//Routes if authenticated
	if (context.isAuth) {
		routes = (
			<Switch>
				<div className="page-content">
					<Route exact path="/" component={DishListContainer} />
					<Route exact path="/order" component={Order}/>
					<Route exact path="/createdish" component={DishForm} />
					<Route exact path="/dishdetail/:id" component={DishDetailContainer} />
					<Redirect to="/" />
				</div>
			</Switch>
		);
	}

	return (
			<BrowserRouter>
			<Navigation/>
				{routes}
			</BrowserRouter>
	);
}

export default App;
