import React from 'react';
import { Link } from 'react-router-dom';
import Valoration from '../Valoration/Valoration';
import './ProductCard.css';
const ProductCard = ({ product }) => {
  console.log(product.images.url);
  return (
    <Link to={`product/${product._id}`}>
      <div className="product-card">
        <div className="product-card-head">
          <img
            src={product.images.url}
            alt={product.name}
            className="product-card-img"
          />
        </div>
        <div className=" product-card-body">
          <div className="product-card-info">
            <h5 className="product-title">{product.name}</h5>
            <p className="product-card-desc">
              {`${product.description.substring(0, 100)}...`}
            </p>
            {/* <p className="product-card-desc">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p> */}

            <Valoration number={product.rating} />
            <div className="product-card-footer">
              <p className="product-card-price">$ {product.price}</p>
              {/* <button>
                <BsCart4 />
                Agregar al carrito
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
