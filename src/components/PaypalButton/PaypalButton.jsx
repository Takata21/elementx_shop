import React from 'react';
import ReactDOM from 'react-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/provider/CartContext';
import { useOrders } from '../../context/provider/OrderContext';
const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PaypalComponent = () => {
  const { clearCart, items, cart_id, totalItems } = useCart();
  const { addNewOrder } = useOrders();
  let navigate = useNavigate();
  const address = localStorage.getItem('etx_direction');
  const handleOrder = async (action) => {
    let products = [];
    products = items.map((item) => ({
      id: item._id,
      quantity: item.quantity,
      images: item.images.url,
      name: item.name,
      price: item.price,
    }));
    products = JSON.stringify(products);

    try {
      const { id, payer, purchase_units } = action;
      console.log(address);
      await addNewOrder({
        paymentId: id,
        email: payer.email_address,
        name: payer.name.given_name + ' ' + payer.name.surname,
        payer_id: payer.payer_id,
        amount: purchase_units[0].amount.value,
        currency: purchase_units[0].amount.currency_code,
        cart_id: cart_id,
        products: products,
        totalItems: totalItems,
        address: address,
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    const action = await actions.order.capture();
    console.log(action);
    if (action.status === 'COMPLETED') {
      await handleOrder(action);
      toast.success('Orden realizada con exito');
      clearCart();
      navigate('/');
    } else {
      toast.error('Error al realizar la orden');
    }
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
