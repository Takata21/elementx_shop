import React from 'react';
import styles from './HeaderV2.module.css';
import { FaBars, FaShoppingCart, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import LateralMenu from '../LateralMenu/LateralMenu';
import { useMenu } from '../../hooks/useMenu';
import { useAuth } from '../../context/provider/AuthContext';
import UserMenu from '../UserMenu/UserMenu';
const HeaderV2 = () => {
  const { isLoggedIn, user } = useAuth();
  const hamburgerMenu = useMenu();
  const userMenu = useMenu();
  return (
    <header className={styles.nav_main}>
      <div className={styles.navbar}>
        <div className={styles.nav_logobar}>
          <div className={styles.nav_left}>
            <div className={styles.nav_hamburger_menu}>
              <a onClick={hamburgerMenu.handleShow}>
                <FaBars
                  size="25"
                  color="white"
                  className="header-hamburger-menu"
                />
              </a>
            </div>
            <div className={styles.nav_logo}>
              <Link to="/" className="header-logo-container">
                <img
                  src="/assets/img/ElementxOnline.svg"
                  alt=""
                  width={'100px'}
                  className={styles.nav_logo_bas}
                />
              </Link>
            </div>
          </div>
          <LateralMenu
            show={hamburgerMenu.show}
            handleShow={hamburgerMenu.handleShow}
          />
          <div className={styles.nav_right}>
            <div className={styles.nav_user}>
              {isLoggedIn ? (
                <>
                  <span className={styles.nav_user_greeting}>
                    Hola,{user?.name}
                  </span>
                  <a
                    className={styles.nav_user_link}
                    onClick={userMenu.handleShow}
                  >
                    <FaRegUser size={'32px'} color="#fff" />
                  </a>
                </>
              ) : (
                <>
                  <span className={styles.nav_user_greeting}>Hola</span>
                  <Link to="/login" className={styles.nav_user_link}>
                    <FaRegUser size={'32px'} color="#fff" />
                  </Link>
                </>
              )}
            </div>
            <Link to="/cart" className={styles.nav_cart}>
              <FaShoppingCart size={'32px'} color="#fff" />
            </Link>
            <UserMenu show={userMenu.show} handleShow={userMenu.handleShow} />
          </div>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default HeaderV2;
