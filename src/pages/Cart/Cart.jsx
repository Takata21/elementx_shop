import React from 'react';
import './Cart.css';
import {
  FaLongArrowAltLeft,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartCard from '../../components/CartCards/CartCard';
import { useCart } from '../../context/provider/CartContext';
import { useAuth } from '../../context/provider/AuthContext';
import toast from 'react-hot-toast';
import PaypalComponent from '../../components/PaypalButton/PaypalButton';
import CartDirection from '../../components/CartDirection/CartDirection';
const Cart = () => {
  const { totalItems, items, totalPrice, direction } = useCart();
  const { isLoggedIn } = useAuth();

  const handlePay = () => {
    if (!isLoggedIn) {
      toast.error(' Necesita iniciar sesión', {
        style: {
          color: '#fff',
          background: '#dc3545',
        },
      });
      return;
    } else if (items === 0) {
      toast.error('Debe tener items en el carro para realizar una compra');
      return;
    }
  };
  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-items-head">
          <h2>Carro de compra</h2>
          <span>{totalItems} items</span>
        </div>
        <hr />
        {items.length <= 0 ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '450px',
            }}
          >
            <h2>No hay elementos seleccionados</h2>
          </div>
        ) : (
          <div className="cart-items-container">
            {items.map((product) => (
              <CartCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      <div className="cart-direction-container">
        <CartDirection />
        <div className="card-payment">
          <div className="card-payment-head">
            <h5 className="">Detalles de compra</h5>
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
              className="img-fluid rounded-3"
              alt="Avatar"
              width={'52px'}
            />
          </div>
          <p className="">Aceptamos</p>
          <div className="card-payment-types">
            <span href="#!" type="submit" className="text-white">
              <FaCcMastercard size="35px" />
            </span>
            <span href="#!" type="submit" className="text-white">
              <FaCcVisa size="35px" />
            </span>
            <span href="#!" type="submit" className="text-white">
              <FaCcPaypal size="35px" />
            </span>
            <a href="#!" type="submit" className="text-white"></a>
          </div>

          <hr />

          <div className="card-payment-subtotal">
            <p className="">Subtotal</p>
            <p className="">$ {new Intl.NumberFormat().format(totalPrice)}</p>
          </div>

          <div className="card-payment-shipping">
            <p className="">Shipping</p>
            <p className="">$20.00</p>
          </div>

          <div className="card-payment-total">
            <p className="">Total(Incl. taxes)</p>
            <p className="">
              $ {new Intl.NumberFormat().format(totalPrice + 20)}
            </p>
          </div>

          <div className="d-flex justify-content-end paypal-container">
            <PaypalComponent />

            {/* <button
              type="button"
              className="payment-btn"
              onClick={() => handlePay()}
              disabled={totalPrice === 0}
            >
              <div className="">
                <span>$ {new Intl.NumberFormat().format(totalPrice)}</span>
                <span>Checkout</span>
                <FaMoneyBillWave />
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
