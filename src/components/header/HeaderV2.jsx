import React from 'react';
import styles from './HeaderV2.module.css';
import { FaBars, FaSearch, FaShoppingCart, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderV2 = () => {
  return (
    <header className={styles.nav_main}>
      <div className={styles.navbar}>
        <div className={styles.nav_logobar}>
          <div className={styles.nav_left}>
            <div className={styles.nav_hamburger_menu}>
              <a>
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
                  width={'150px'}
                  className={styles.nav_logo_bas}
                />
              </Link>
            </div>
          </div>
          <div className={styles.nav_right}>
            <Link to="/login" className={styles.nav_user}>
              <FaRegUser size={'32px'} color="#fff" />
            </Link>
            <Link to="/cart" className={styles.nav_cart}>
              <FaShoppingCart size={'32px'} color="#fff" />
            </Link>
          </div>
        </div>
        <div className={styles.nav_searchbar_wrapper}>
          <form className={styles.nav_searchbar}>
            <div className={styles.nav_fill}>
              <div className={styles.nav_search_field}>
                <input
                  type="text"
                  className={styles.nav_input}
                  placeholder="Buscar Elementx"
                />
              </div>
            </div>
            <div className={(styles.nav_searchbar, styles.nav_right)}>
              <div className={styles.nav_search_submit}>
                <button type="submit" className={styles.nav_input}>
                  <FaSearch color="#000" className={styles.nav_search_icon} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default HeaderV2;
