import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import Valoration from '../Valoration/Valoration';
import './ProductCard.css';
const ProductCard = () => {
  return (
    <Link to="product/askdlj">
      <div className="product-card">
        <div className="product-card-head">
          <img
            src="./assets/img/fill2.jpg"
            alt=""
            className="product-card-img"
          />
        </div>
        <div className=" product-card-body">
          <div className="product-card-info">
            <h5 className="product-title">ASUS TUG GAMING F15</h5>
            <Valoration number={2} />
            <p className="product-card-price">$ 1000</p>
            <p className="product-desc">
              Es un portátil de gaming Windows 10 Pro armado hasta los dientes
              para servirte la victoria en bandeja.......
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
