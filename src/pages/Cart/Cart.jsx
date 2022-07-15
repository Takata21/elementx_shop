import React, { useState } from 'react';
import './Cart.css';
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CartCard from '../../components/CartCards/CartCard';
import { useCart } from '../../context/provider/CartContext';
import { useAuth } from '../../context/provider/AuthContext';
import toast from 'react-hot-toast';
import PaypalComponent from '../../components/PaypalButton/PaypalButton';
import DirectionForm from '../../components/DirectionForm/DirectionForm';
const Cart = () => {
  const [direction, setDirection] = useState({
    province: '',
    subsidiary: '',
  });
  const { totalItems, items, totalPrice } = useCart();
  const { isLoggedIn } = useAuth();
  let navigate = useNavigate();
  const delivery = 7.0;

  return (
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-items-head">
          <h2>Carro de compra</h2>
          <span>{totalItems} items</span>
        </div>
        <hr />
        {items.length <= 0 ? (
          <div className="cart-no-items">
            <img
              src="/assets/img/empty_cart.gif"
              alt="cart empty image"
              className="empty_cart_gif"
            />
            <h2>No hay elementos seleccionados</h2>
            <Link to="/" className="cart-btn">
              Seguir Comprando
            </Link>
          </div>
        ) : (
          <div className="cart-items-container">
            {items.map((product) => (
              <CartCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
      <div className="cart-delivery-container">
        {totalItems !== 0 && <DirectionForm />}
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
            <p className="">
              ${' '}
              {totalItems <= 0
                ? '0.00'
                : new Intl.NumberFormat('en-US', {
                    maximumSignificantDigits: 4,
                  }).format(totalPrice)}
            </p>
          </div>

          <div className="card-payment-shipping">
            <p className="">Shipping</p>
            <p className="">{totalItems <= 0 ? '$ 0.00' : '$ 7.00'}</p>
          </div>

          <div className="card-payment-total">
            <p className="">Total(Incl. taxes)</p>
            <p className="">
              ${' '}
              {totalItems <= 0
                ? '0.00'
                : new Intl.NumberFormat('en-US', {
                    maximumSignificantDigits: 4,
                  }).format(totalPrice + delivery)}
            </p>
          </div>
          {totalItems <= 0 || !isLoggedIn ? (
            <Link to="/" className="cart-btn">
              Seguir Comprando
            </Link>
          ) : (
            <div className="d-flex justify-content-end paypal-container">
              <PaypalComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
