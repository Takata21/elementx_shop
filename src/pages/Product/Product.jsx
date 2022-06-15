import React, { useEffect, useState } from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { getProduct } from '../../api/productsAPI';
import Valoration from '../../components/Valoration/Valoration';
import { useProducts } from '../../context/provider/ProductsContext';

const Product = () => {
  const params = useParams();
  console.log(params.id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const loadProduct = async () => {
      const product = await getProduct(params.id);
      setProduct(product.data);
    };
    loadProduct();
  }, [params]);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 min-h">
        <TailSpin color="#00adb5" ariaLabel="loading" />;
      </div>
    );
  }
  return (
    <div className="product-page-container">
      <div className="product-page-head">
        <div className="product-page-important">
          <span> -10%</span>
          <span>nuevo</span>
        </div>
        <img src={product.images?.url} alt="" className="product-page-img" />
        <div className="product-img-brand-container ">
          <img
            src="/assets/img/ASUS_Logo.svg"
            alt=""
            className="product-page-brand-img"
          />
        </div>
      </div>
      <div className="product-page-body">
        <h3 className="product-page-title">{product.name}</h3>
        <Valoration number={product.rating} />
        <p className="product-page-brand">
          Marca:
          <span> ASUS</span>
        </p>
        <p className="product-page-short-desc">{product.description}</p>
        <div className="product-page-delivery">
          <p>Envio por:</p>
          <img src="/assets/img/unoexpress.png" alt="unoexpress" />
        </div>
        <p className="product-page-price">$ {product.price}</p>
        <button className="product-page-add-to-cart">
          <FaShoppingCart />
          <span>Agregar al carrito de compra</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
