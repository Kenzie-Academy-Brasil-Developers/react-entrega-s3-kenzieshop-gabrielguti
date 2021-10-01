import { useSelector } from "react-redux";
import Product from "../product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      {cart.map((item, index) => (
        <Product key={index} product={item} control />
      ))}
    </div>
  );
};

export default Cart;
