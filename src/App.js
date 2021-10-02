import './App.css';
import DishListContainer from './components/functionals/dishListContainer';
import DishDetailContainer from './components/functionals/dishDetailContainer';
import Header from './components/layout/header';
import Navigation from './components/layout/navigation';
import Login from './components/functionals/login';
import Signup from './components/functionals/signup';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from './components/context';

//Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
			
			{/*<Header/>*/}
			<Navigation/>
			<Switch>
				<div className="page-content">
					<Route exact path="/" component={DishListContainer} />
					<Route exact path="/dishdetail/:id" component={DishDetailContainer} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
				</div>
			</Switch>
			
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
