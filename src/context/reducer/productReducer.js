import { productActions } from '../actions/productsActions';
export const initialState = {
  isLoading: false,
  products: [],
  errorMessages: '',
};

export const productReducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case productActions.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case productActions.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case productActions.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      break;
  }
};
