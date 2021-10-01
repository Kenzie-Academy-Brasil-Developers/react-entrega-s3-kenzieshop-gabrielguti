import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Product from "../product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const totalPrice = cart.reduce((value1, value2) => {
    return Math.round(value1 + value2.price);
  }, 0);
  const handle = () => {
    if (totalPrice !== 0) {
      return toast.success("Compra Finalizada com Sucesso!");
    } else {
      return toast.error("Adicione produtos ao carrinho primeiro");
    }
  };
  return (
    <>
      {/* <div className = 'goBack'>
        <Link to="/">Voltar</Link>
      </div> */}
      <div className="cartBag">
        <h2>Resumo do Pedido</h2>
        <h3>R$:{totalPrice}</h3>
        <button onClick={handle}>Finalizar compra</button>
      </div>
      <div className="cartList">
        {cart.map((item, index) => (
          <Product key={index} product={item} control />
        ))}
      </div>
    </>
  );
};

export default Cart;
