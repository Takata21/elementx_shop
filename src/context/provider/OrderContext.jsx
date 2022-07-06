import { createContext, useEffect, useReducer, useContext } from 'react';

import { initialState, orderReducer } from '../reducer/orderReducer';
import { ordersActions } from '../actions/ordersActions';
import { createOrder } from '../../api/orderAPI/';
export const OrderContext = createContext(initialState);

export const useOrders = () => {
  const context = useContext(OrderContext);
  return context;
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const loadOrders = async () => {};

  useEffect(() => {}, []);

  const addNewOrder = async ({
    id,
    email,
    name,
    payer_id,
    amount,
    currency,
    cart_id,
    products,
    province,
    subsidiary,
    totalItems,
  }) => {
    dispatch({ type: ordersActions.LOAD_SAVE_ORDER });
    try {
      const res = await createOrder({
        id,
        email,
        name,
        payer_id,
        amount,
        currency,
        cart_id,
        products,
        province,
        subsidiary,
        totalItems,
      });
      if (res.data) {
        dispatch({
          type: ordersActions.LOAD_SAVE_ORDER_SUCCESS,
          payload: res.data,
        });
        return res;
      }
    } catch (error) {
      dispatch({
        type: ordersActions.LOAD_SAVE_ORDER_ERROR,
        payload: error.message,
      });
    }
  };
  const deleteOrder = async () => {};

  return (
    <OrderContext.Provider value={{ ...state, addNewOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
