import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          {/*<Success /> */}
        </Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
        {/*}
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
  </Route>*/}
      </Switch>
    </Router>
  );
}

export default App;
