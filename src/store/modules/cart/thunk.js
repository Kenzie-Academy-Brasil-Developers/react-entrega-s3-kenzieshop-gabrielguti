import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch, getStore) => {
    const cartList = JSON.parse(localStorage.getItem("@cart")) || [];

    cartList.push(product);

    localStorage.setItem("@cart", JSON.stringify(cartList));

    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (id) => {
    return(dispatch, getStore) => {
        const { cart } = getStore();

        const cartList = cart.filter((item) => item.id !== id);

        localStorage.setItem('@cart', JSON.stringify(cartList));

        dispatch(removeFromCart(cartList));
    }
}