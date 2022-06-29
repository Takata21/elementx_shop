import React from 'react';
import {
  FaChartPie,
  FaSignOutAlt,
  FaUserAlt,
  FaShoppingBag,
  FaShippingFast,
  FaHeart,
  FaShoppingCart,
  FaHeadset,
  FaWallet,
} from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
import './ProfileMenu.css';
const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              to="/profile"
            >
              <FaUserAlt />
              <span> Mi Cuenta</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaChartPie />

              <span>Mis ordenes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaShoppingBag />

              <span>Compras</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaWallet />
              <span>Pagos</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaHeadset />
              <span>Soporte</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaHeart />
              <span>Favoritos</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <GrUserAdmin />
              <span>Admin Panel</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="profile-menu-link" to="tasks">
              <FaSignOutAlt />
              <span>Cerrar sesión</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
