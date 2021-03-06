import React from 'react';
import { useProducts } from '../context/provider/ProductsContext';
import ProductCard from '../components/ProductCard/ProductCard';
import SecondaryBanner from '../components/SencondaryBanner/SecondaryBanner';
import Carousel from '../components/carousel/Carousel';
import { TailSpin } from 'react-loader-spinner';
const HomePage = () => {
  const { isLoading, products } = useProducts();
  window.scrollTo(0, 0);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 min-h">
        <TailSpin color="#00adb5" ariaLabel="loading" />;
      </div>
    );
  }

  return (
    <main className="p-0 m-0" style={{ width: '100%' }}>
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item carousel-index position-relative top-banner"
            data-bs-interval="2000"
          >
            <a className="btn position-absolute top-0 start-50 translate-middle-x pt-4 text-center text-light text-decoration-none text-shadow">
              <h1>Semana Gamer</h1>
              <p>Ofertas en Videojuegos con hasta un 70% de descuentos. </p>
            </a>
          </div>
        </div>
      </div>
      <div className="px-2 product-container">
        <div className="products-card-container">
          {products &&
            products?.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
        </div>
      </div>
      <SecondaryBanner />

      <div className="p-4 position-relative products-card-container">
        {products.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
      <div className="">
        <Carousel />
      </div>
    </main>
  );
};

export default HomePage;
