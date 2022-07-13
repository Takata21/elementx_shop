import React from 'react';
import { Link } from 'react-router-dom';
import Valoration from '../Valoration/Valoration';
import './ProductCard.css';
const ProductCard = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>
      <div className="product-card">
        <div className="product-card-head">
          <img
            src={product.images.url}
            alt={product.name}
            className="product-card-img"
            loading="lazy"
          />
        </div>
        <div className=" product-card-body">
          <div className="product-card-info">
            <h5 className="product-title">{product.name}</h5>
            <p className="product-card-desc">
              {`${product.description.substring(0, 40)}...`}
            </p>

            <div className="product-stock">
              <span
                className={
                  product?.stock > 5
                    ? 'product-stock-message many'
                    : 'product-stock-message few'
                }
              >
                Queda(n) {product.stock} producto(s) en stock
              </span>
            </div>

            <Valoration number={product.rating} />
            <div className="product-card-footer">
              <p className="product-card-price">$ {product?.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
