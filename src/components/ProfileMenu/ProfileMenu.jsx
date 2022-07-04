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
import { useAuth } from '../../context/provider/AuthContext';
import './ProfileMenu.css';
const ProfileMenu = () => {
  const { user } = useAuth();
  return (
    <div className="profile-menu">
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="/profile"
            >
              <FaUserAlt />
              <span> Mi Cuenta</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="/profile/orders"
            >
              <FaChartPie />

              <span>Mis ordenes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="/profile/budget"
            >
              <FaShoppingBag />

              <span>Compras</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="/profile/bills"
            >
              <FaWallet />
              <span>Pagos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="/contact"
            >
              <FaHeadset />
              <span>Soporte</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="tasks"
            >
              <FaHeart />
              <span>Favoritos</span>
            </NavLink>
          </li>
          {user.isRoot && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'profile-menu-link active' : 'profile-menu-link'
                }
                end
                to="tasks"
              >
                <GrUserAdmin />
                <span>Admin Panel</span>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'profile-menu-link active' : 'profile-menu-link'
              }
              end
              to="tasks"
            >
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
