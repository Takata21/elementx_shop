import React, { useRef, useState } from 'react';
import './Header.css';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';
import Search from '../search/Search';
import Cart from '../cart/Cart';
import Profile from '../profile/Profile';
import LateralMenu from '../LateralMenu/LateralMenu';
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  let location = useLocation();

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
            <Link to="/cart">
              <FaShoppingCart size="25" color="white" />
            </Link>
          </div>
          <div className="header-profile-container">
            <Link to="/login" className="header-login-btn">
              Iniciar sesión
            </Link>
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
