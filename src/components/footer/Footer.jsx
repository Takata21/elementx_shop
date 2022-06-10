import React from 'react';
import SocialBanner from '../SocialBanner/SocialBanner';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark position-relative pt-5 shadow-lg flex-column z-index-2">
      <SocialBanner />
      <div className="pt-4 px-3">
        <div className="d-flex flex-wrap align-items-start text-light pb-2">
          <div className="col-md-4 col-sm-12 col-xs-12 d-flex flex-column px-2 pb-4">
            <h5 className="fw-bold text-success text-center fs-6">¿Qué es?</h5>
            <p className="text-secondary text-center lh-sm fs-7">
              <b>Elementx.Online</b> es una aplicación, que funciona como tienda
              virtual para la venta de productos y servicios que ofrece tanto la
              empresa, así como sus asociados.
            </p>
            <a
              name=""
              href=""
              className="btn btn-success fw-bold text-light align-self-center"
              role="button"
            >
              Ver más...
            </a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 px-2 pb-2 d-flex flex-column">
            <h5 className="fw-bold text-success fs-6">Productos</h5>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Moda
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Electrónica
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Promocionales
            </a>
            <h5 className="fw-bold mt-3 text-success fs-6">Servicios</h5>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Impresiones
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Desarrollo de Software
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Diseño Gráfico
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Planos Constructivos
            </a>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 px-2 pb-2 d-flex flex-column">
            <h5 className="fw-bold text-success fs-6">Relevantes</h5>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary bi bi-dot"
              href=""
            >
              {' '}
              Impresiones
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Desarrollo de Software
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Diseño Gráfico
            </a>
            <h5 className="fw-bold mt-3 text-success fs-6">
              Términos y Condiciones
            </h5>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Privacidad
            </a>
            <a
              className="fs-7 text-decoration-none bi bi-dot ho-secondary"
              href=""
            >
              Condiciones
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 px-2 pb-5 d-flex flex-column">
            <h5 className="fw-bold text-success fs-6">Contacto</h5>

            <p className="bi bi-dot" style={{ fontWeight: '800' }}>
              Email:
            </p>
            <div className="footer-email">
              <span>contacto@elementx.online</span>
              <span> admin@elementx.online</span>
            </div>

            <p className="bi bi-dot" style={{ fontWeight: '800' }}>
              Telefono:
            </p>
            <div className="footer-email">
              <span>+507 988-2214</span>
              <span>+507 6984-5064</span>
            </div>
            <h5 class="fw-bold text-success fs-6">Dirección</h5>
            <div class="d-flex flex-column">
              <a
                class="fs-7 text-decoration-none bi bi-dot ho-secondary"
                href="https://g.page/elementxgamezone?share"
                target="_blank"
                title="Ubicación en Google Maps"
              >
                Calle Sexta, La Pintada, La Pintada, Coclé, Panamá.
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#191d24' }}>
        <div className="container d-flex flex-column align-content-center text-center py-3">
          <img
            src="./assets/img/LettersElementx.svg"
            alt="Logo"
            width="150px"
            className="align-self-center text-light"
          />

          <span className="align-self-center text-light fw-normal">
            &copy; Todos los Derechos Reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
