import React from 'react';
import ReactDOM from 'react-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/provider/CartContext';
// const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PaypalComponent = () => {
  let navigate = useNavigate();
  const { clearCart, items } = useCart();

  const createOrder = (data, actions) => {
    const cart = JSON.parse(localStorage.getItem('etx_cart'));

    const items = cart.items.map((item) => ({
      unit_amount: {
        currency_code: 'USD',
        value: item.price * item.quantity,
      },
      quantity: item.quantity,
      name: item.name,
    }));

    return actions.order.create({
      purchase_units: [
        {
          description: 'Some Hardware Products',
          amount: {
            value: cart.totalPrice,
            currency_code: 'USD',
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    await actions.order.capture();
    clearCart();
    navigate('/');
    toast.success('Successfull Payment', {
      duration: 5000,
    });
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      style={{
        tagline: 'false',
        label: 'checkout',
        shape: 'rect',
        layout: 'horizontal',
        size: 'small',
      }}
    />
  );
};

export default PaypalComponent;
