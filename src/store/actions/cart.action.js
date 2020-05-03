export const TYPES = {
  INSERT_ITEM_CART: "INSERT_ITEM_CART",
  REMOVE_ITEM_CART: "REMOVE_ITEM_CART",
  CLEAR_CART: "CLEAR_CART",
  INCREMENT_ITEM_CART: "INCREMENT_ITEM_CART",
  DECREMENT_ITEM_CART: "DECREMENT_ITEM_CART",
};

const incrementItemCart = (id) => async (dispatch) => {
  dispatch({
    type: TYPES.INCREMENT_ITEM_CART,
    payload: id,
  });
};

const decrementItemCart = (id) => async (dispatch) => {
  dispatch({
    type: TYPES.DECREMENT_ITEM_CART,
    payload: id,
  });
};

const insertItemCart = (item) => async (dispatch, getState) => {
  const cart = await getState().cart;

  if (cart.find((_item) => item.id === _item.id)) {
    dispatch(incrementItemCart(item));
    return;
  }

  dispatch({
    type: TYPES.INSERT_ITEM_CART,
    payload: item,
  });
  return;
};

const removeItemCart = (id) => (dispatch) => {
  dispatch({ type: TYPES.REMOVE_ITEM_CART, payload: id });
};

const clearCart = () => (dispatch) => {
  dispatch({ type: TYPES.CLEAR_CART });
};

export default {
  incrementItemCart,
  decrementItemCart,
  insertItemCart,
  removeItemCart,
  clearCart,
};
