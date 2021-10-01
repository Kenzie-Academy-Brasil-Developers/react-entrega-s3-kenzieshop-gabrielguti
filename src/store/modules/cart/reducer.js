import { ADD_CART, REMOVE_CART } from "./actionTypes";
import { toast } from "react-toastify";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      toast.success("Produto adicionado!");
      return [...state, product];

    case REMOVE_CART:
      const { id } = action;
      const newProducts = state.filter((item) => item.id !== id);
      toast.success("Produto removido");
      return newProducts;

    default:
      return state;
  }
};

export default cartReducer;
