import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: '#191d24' }}>
      <div className="container d-flex flex-column align-content-center text-center py-3">
        <img
          src="/assets/img/LettersElementx.svg"
          alt="Logo"
          width="150px"
          className="align-self-center text-light"
        />

        <span className="align-self-center text-light fw-normal">
          &copy;{year} Todos los Derechos Reservados.
        </span>
      </div>
    </div>
  );
};

export default Copyright;
