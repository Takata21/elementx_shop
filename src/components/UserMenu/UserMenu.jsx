import React from 'react';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import {
  FaAngleDown,
  FaUserAlt,
  FaChartPie,
  FaSignOutAlt,
  FaHeadset,
  FaShoppingBag,
  FaWallet,
  FaTimes,
} from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { useAuth } from '../../context/provider/AuthContext';
const UserMenu = ({ show, handleShow }) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    // {show ? `aside active` : `aside`}
    <div
      className={
        show
          ? `${styles.userMenu_container} ${styles.active}`
          : styles.userMenu_container
      }
    >
      <div className={styles.userMenu}>
        <article className={styles.useMenu_head}>
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
            alt=""
            className={styles.userMenu_avatar}
          />
          <div className={styles.userMenu_greeting}>
            <p>hola, manuel</p>
          </div>
          <button className={styles.userMenu_btnClose} onClick={handleShow}>
            <FaTimes />
          </button>
        </article>
        <div className={styles.userMenu_body}>
          <div className={styles.userMenu_myAccount}>
            <h5 className={styles.userMenu_subtitle}>Mi cuenta</h5>
            <div className={styles.userMenu_options}>
              <Link to="/profile" className={styles.userMenu_option}>
                <FaUserAlt />
                <span> Mi Cuenta</span>
              </Link>
              <Link to="/profile/orders" className={styles.userMenu_option}>
                <FaChartPie />
                <span>Mis ordenes</span>
              </Link>
              <Link to="/profile/budget" className={styles.userMenu_option}>
                <FaShoppingBag />
                <span>Compras</span>
              </Link>
              <Link to="/profile/bills" className={styles.userMenu_option}>
                <FaWallet />
                <span>Pagos</span>
              </Link>
            </div>
          </div>
          <div className={styles.userMenu_config}>
            <h5 className={styles.userMenu_subtitle}>Configuración</h5>
            <div className={styles.userMenu_options}>
              <Link to="/contact" className={styles.userMenu_option}>
                <FaHeadset />
                <span>Soporte</span>
              </Link>

              {isLoggedIn && user.isAdmin && user.isRoot && (
                <Link
                  to="/ZCI6IjYyYWZjNjg3NjU5YTZk/admin"
                  className={styles.userMenu_option}
                >
                  <GrUserAdmin color="white" />
                  <span>Admin Panel</span>
                </Link>
              )}
              <Link to="/" onClick={logout} className={styles.userMenu_option}>
                <FaSignOutAlt />
                <span>Cerrar sesión</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
