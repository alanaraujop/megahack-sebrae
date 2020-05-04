import { TYPES } from "../actions/cart.action";

const INITIAL_STATE = [];

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.INCREMENT_ITEM_CART:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case TYPES.DECREMENT_ITEM_CART:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case TYPES.INSERT_ITEM_CART:
      return [...state, { ...action.payload, quantity: 1 }];

    case TYPES.REMOVE_ITEM_CART:
      return state.filter((item) => item.id !== action.payload);

    case TYPES.SET_SIZE_ITEM_CART:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, size: action.payload.size }
          : item
      );
    case TYPES.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default CartReducer;
