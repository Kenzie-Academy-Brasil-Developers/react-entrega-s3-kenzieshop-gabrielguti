import { ADD_CART, REMOVE_CART } from "./actionTypes";
import { toast } from "react-toastify";

const inicialState = JSON.parse(localStorage.getItem("@cart")) || [];

const cartReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      toast.success("Produto adicionado!");
      return [...state, product];

    case REMOVE_CART:
      const { list } = action;
      toast.success("Produto removido");
      return list;

    default:
      return state;
  }
};

export default cartReducer;
