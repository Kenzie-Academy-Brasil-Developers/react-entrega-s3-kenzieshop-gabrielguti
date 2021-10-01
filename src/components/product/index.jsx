import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../store/modules/cart/actions";

const Product = ({ product, control = false }) => {
  const dispatch = useDispatch();

  const { price } = product;
  const { name } = product;
  const { id } = product;
  const { img } = product;
  return (
    <div className="productBox">
      <img src={img} alt="itemImg" />
      <p>{name}</p>
      <p className = 'price'>{`R$ ${price}`}</p>
      {control ? (
        <button
          className="removeItem"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remover
        </button>
      ) : (
        <button
          className="addItem"
          onClick={() => dispatch(addToCart(product))}
        >
          Adicionar no carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
