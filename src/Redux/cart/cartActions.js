export const setCartItem = (item) => ({
  type: "SET_CART_ITEM",
  payload: item,
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id
});

export const increaseItemCount = (id) => ({
  type: 'INCREASE_ITEM_COUNT',
  payload: id
});

export const decreaseItemCount = (id) => ({
  type: 'DECREASE_ITEM_COUNT',
  payload: id
});

export const emptyCart = () => ({
  type: 'EMPTY_CART',
});