import { ordersActions } from '../actions/ordersActions';

export const initialState = {
  isLoading: false,
  orders: [],
  errorMessages: '',
};

export const orderReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case ordersActions.LOAD_ORDERS:
      return {
        ...state,
        isLoading: true,
      };
    case ordersActions.LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case ordersActions.LOAD_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case ordersActions.LOAD_SAVE_ORDERS:
      return {
        ...state,
        isLoading: true,
      };
    case ordersActions.LOAD_SAVE_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    case ordersActions.LOAD_SAVE_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    case ordersActions.ADD_ORDERS_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case ordersActions.DELETE_ORDERS:
      return {
        ...state,
        isLoading: true,
      };
    case ordersActions.DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
        isLoading: false,
      };
    case ordersActions.DELETE_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
