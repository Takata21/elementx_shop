import React from 'react';
import './CartCard.css';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../../context/provider/CartContext';
const CartCard = ({ product }) => {
  const { appendItemToCart, removeItem, clearCart, decrementItem } = useCart();

  return (
    <div className="card-cart">
      <div className="card-head">
        <div className="card-head-img-container">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
            className="img-fluid rounded-3"
            alt="Shopping item"
            width="52px"
          />
        </div>
        <div className="cart-card-details">
          <h5>{product?.name}</h5>
          <p className="">${product?.description.substring(0, 20)}...</p>
        </div>
      </div>
      <div className="card-actions-container">
        <div className="card-actions">
          <button onClick={() => appendItemToCart(product)}>
            <FaPlus />
          </button>
          <p>{product?.quantity}</p>
          <button onClick={() => decrementItem(product)}>
            <FaMinus />
          </button>
        </div>
        <div>
          <p className="card-price">$900</p>
        </div>
        <button className="card-btn-delete" onClick={() => removeItem(product)}>
          <FaTrashAlt color="red" size="15" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
