import React from 'react';
import './SecondaryBanner.css';

const SecondaryBanner = () => {
  return (
    <div className="secondary-banner">
      {' '}
      <img
        src="./assets/img/Articulos3.png"
        alt=""
        className="secondary-banner-img"
      />{' '}
      <h2>Productos y servicios a tu alcance.</h2>{' '}
      <img
        src="./assets/img/Articulos.png"
        alt=""
        className="secondary-banner-img"
      />{' '}
    </div>
  );
};

export default SecondaryBanner;
