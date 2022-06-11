import { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../reducer/productReducer';
import { productActions } from '../actions/productsActions';
import { getProducts } from '../../api/productsAPI';
export const ProductContext = createContext(initialState);

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: productActions.LOAD_PRODUCTS });
    try {
      const res = await getProducts();
      if (res.data) {
        dispatch({
          type: productActions.LOAD_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: productActions.LOAD_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
