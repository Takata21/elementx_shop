import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaHotjar,
  FaDesktop,
  FaToolbox,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa';
import './LateralMenu.css';
const LateralMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <aside className={openMenu ? `aside active` : `aside`}>
        <div className="lateral-menu-container">
          <div className="lateral-menu-head">
            <Link to="/">
              <img
                src="/assets/img/LogoElementx.svg"
                alt=""
                className="logo-img"
              />
            </Link>

            <button
              className="lateral-menu-head-btn-close"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <FaTimes size="30" color="white" />
            </button>
          </div>
          <nav className="lateral-menu-items-container">
            <div className="submenu-container">
              <h3>
                <FaHotjar /> <span>Tendencias</span>
              </h3>
              <ul>
                <li>
                  <Link to="/">Ofertas</Link>
                </li>
                <li>
                  <Link to="/">Más Vendidos</Link>
                </li>
                <li></li>
                <li>
                  <Link to="/">Populares</Link>
                </li>
              </ul>
            </div>
            <div className="submenu-container">
              <h3>
                <FaDesktop /> <span>Productos</span>
              </h3>
              <ul>
                <li>
                  <Link to="/">Computación</Link>
                </li>
                <li></li>
                <li>
                  <Link to="/">Electrónica</Link>
                </li>
              </ul>
            </div>
            <div className="submenu-container">
              <h3>
                <FaToolbox /> <span>Servicios</span>
              </h3>
              <ul>
                <li>
                  <Link to="/">Immpresiones</Link>
                </li>
                <li>
                  <Link to="/">Diseño Gráfico</Link>
                </li>
                <li>
                  <Link to="/">Construcción</Link>
                </li>
                <li>
                  <Link to="/">Desarrollo de Software</Link>
                </li>
              </ul>
            </div>
            <div className="lateral-menu-footer">
              <a
                href="https://www.instagram.com/elementxgamezone"
                target={'_blank'}
              >
                <FaInstagram color="#B9D2D2" size="30px" />
              </a>
              <a
                href="https://www.facebook.com/ElementxGameZone"
                target={'_blank'}
              >
                <FaFacebook color="#B9D2D2" size="30px" />
              </a>
              <a href="/" target={'_blank'}>
                <FaYoutube color="#B9D2D2" size="30px" />
              </a>
              <a href="/" target={'_blank'}>
                <FaTwitch color="#B9D2D2" size="30px" />
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default LateralMenu;
