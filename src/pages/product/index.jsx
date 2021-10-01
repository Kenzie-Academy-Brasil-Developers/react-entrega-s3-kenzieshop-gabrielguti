import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";

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
      <p className="price">{`R$ ${price}`}</p>
      {control ? (
        <button
          className="removeItem"
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remover
        </button>
      ) : (
        <button
          className="addItem"
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Adicionar no carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
