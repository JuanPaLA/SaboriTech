import './App.css';
import DishListContainer from './components/functionals/dishListContainer';
import DishDetailContainer from './components/functionals/dishDetailContainer';
import Header from './components/layout/header';
import Nav from './components/layout/nav';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from './components/context';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    
    <Header/>
    <Nav/>
    <Switch>
    <div>
      <Route exact path="/" component={DishListContainer} />
      <Route exact path="/dishdetail/:id" component={DishDetailContainer} />
    </div>
    </Switch>
    
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
