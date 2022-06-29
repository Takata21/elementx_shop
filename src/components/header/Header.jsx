import React, { useRef, useState } from 'react';
import './Header.css';
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaAngleDown,
  FaUserAlt,
  FaChartPie,
  FaSignOutAlt,
  FaHeadset,
} from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

import LateralMenu from '../LateralMenu/LateralMenu';
import { useAuth } from '../../context/provider/AuthContext';
import { useCart } from '../../context/provider/CartContext';
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  let location = useLocation();
  const { isLoggedIn, user, logout } = useAuth();
  const { totalItems } = useCart();
  if (location.pathname !== '/login' && location.pathname !== '/register') {
    return (
      <header className="header">
        <div className="header-left">
          <span
            className="header-hamburger-menu-container"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <FaBars size="25" color="white" className="header-hamburger-menu" />
          </span>
          <Link to="/" className="header-logo-container">
            <img
              src="/assets/img/LogoElementx.svg"
              alt=""
              className="header-logo-img"
            />
            <img
              src="/assets/img/LettersElementx.svg"
              alt=""
              className="header-letters-img"
            />
          </Link>
        </div>
        <LateralMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="header-right">
          <div className="header-search-container">
            <FaSearch size="25" color="white" />
          </div>
          <div className="header-cart-container">
            <Link to="/cart" className="header-cart-link">
              <FaShoppingCart size="25" color="white" />
              <span className="header-cart-number-item">{totalItems}</span>
            </Link>
          </div>
          <div className="header-profile-container">
            {isLoggedIn ? (
              <div
                className="header-login-l2"
                onClick={() => setShowMenu(!showMenu)}
              >
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
                  alt=""
                />
                <FaAngleDown />
                <div
                  className={
                    showMenu ? 'header-user-menu active' : 'header-user-menu'
                  }
                >
                  <p className="header-user-name">
                    Hola,
                    <br />
                    {user.name} <span></span>
                    {user.surname}
                  </p>

                  <div>
                    <Link to="/profile">
                      <span className="icon-user-menu">
                        <FaUserAlt />
                      </span>
                      <span> Mi Cuenta</span>
                    </Link>
                    <Link to="">
                      <span className="icon-user-menu">
                        <FaChartPie />
                      </span>
                      <span>Mis ordenes</span>
                    </Link>

                    <Link to="">
                      <span className="icon-user-menu">
                        <FaHeadset />
                      </span>
                      <span>Soporte</span>
                    </Link>

                    {isLoggedIn && user.isAdmin && user.isRoot && (
                      <Link to="/ZCI6IjYyYWZjNjg3NjU5YTZk/admin">
                        <span className="icon-user-menu">
                          <GrUserAdmin />
                        </span>
                        <span>Admin Panel</span>
                      </Link>
                    )}
                    <Link to="/" onClick={() => logout()}>
                      <span className="icon-user-menu">
                        <FaSignOutAlt />
                      </span>
                      <span>Cerrar sesión</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="header-login-btn">
                <div className="header-login-l1">
                  <FaUserCircle />
                  <span> Iniciar sesión</span>
                </div>
              </Link>
            )}

            {/* <Link to="/profile">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35"
                alt=""
                className="header-profile-picture"
              />
            </Link> */}
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
