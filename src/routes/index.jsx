import { Route, Switch } from "react-router";
import Cart from "../pages/cart";
import Products from "../pages/products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
