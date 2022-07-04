import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Cart.css';
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/CartCards/CartCard';
import { useCart } from '../../context/provider/CartContext';
import { useAuth } from '../../context/provider/AuthContext';
import toast from 'react-hot-toast';
// import PaypalComponent from '../../components/PaypalButton/PaypalButton';
import CartDirection from '../../components/CartDirection/CartDirection';
import { createOrder } from '../../api/order';
import OrderDetails from '../../components/OrderDetailsModal/OrderDetails';
const Cart = () => {
  const [closeModal, setCloseModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [PaymentLink, setPaymentLink] = useState('');
  const { cart_id, totalItems, items, totalPrice, direction } = useCart();
  const { isLoggedIn } = useAuth();
  let navigate = useNavigate();

  const cartOrder = async () => {
    setLoading(true);
    const province = direction.province;
    const subsidiary = direction.subsidiary;
    const initialValue = '';
    let desc = items.reduce(
      (prev, current) => `${prev}, ${current.name}`,
      initialValue
    );
    desc = desc.substring(2);
    try {
      const res = await createOrder({
        cart_id,
        totalItems,
        totalPrice,
        province,
        subsidiary,
        desc,
      });
      const { href } = res?.data;
      setPaymentLink(href);
      setCloseModal(!closeModal);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePay = () => {
    if (!isLoggedIn) {
      toast.error(' Necesita iniciar sesión');
      navigate('/login');
      return;
    }
    if (totalItems === 0) {
      toast.error('Debe tener items en el carro para realizar una compra');
      return;
    }

    if (Object.keys(direction).length === 0 || direction.subsidiary === '') {
      toast.error('Debe agregar una direccion de envio');
      return;
    }
    cartOrder();
  };
  return (
    <div className="cart-container">
      <OrderDetails
        setCloseModal={setCloseModal}
        closeModal={closeModal}
        PaymentLink={PaymentLink}
      />

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
        {
          // disabled because shipping is subject to unoExpress subsidiary
          totalItems !== 0 && <CartDirection />
        }
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
            {/* <PaypalComponent /> */}

            <button
              type="button"
              className="payment-btn"
              onClick={() => handlePay()}
              disabled={totalPrice === 0 || loading}
            >
              {loading ? (
                <>
                  <TailSpin />
                  <span>cargando</span>
                </>
              ) : (
                <div className="">
                  <span>$ {new Intl.NumberFormat().format(totalPrice)}</span>
                  <span>Checkout</span>
                  <FaMoneyBillWave />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
