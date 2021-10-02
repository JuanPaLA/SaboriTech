import './App.css';
import DishListContainer from './components/functionals/dishListContainer';
import DishDetailContainer from './components/functionals/dishDetailContainer';
import Nav from './components/layout/nav';
import Order from './components/functionals/order';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from './components/context';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Nav/>
    <Switch>
    <div>
      <Route exact path="/" component={DishListContainer} />
      <Route exact path="/dishdetail/:id" component={DishDetailContainer} />
      <Route exact path="/order" component={Order}/>
    </div>
    </Switch>
    
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
