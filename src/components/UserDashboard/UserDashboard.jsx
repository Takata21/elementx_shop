import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';
const UserDashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Link to="/profile/orders" className="dashboard-card">
          <span className="dashboard-type">Pedidos</span>
          <span className="dashboard-type-quantity">(0) </span>
        </Link>
        <Link to="/profile/bills" className="dashboard-card">
          <span className="dashboard-type">Facturas</span>
          <span className="dashboard-type-quantity">(0) </span>
        </Link>
        <Link to="/profile/budget" className="dashboard-card">
          <span className="dashboard-type">Presupuestos</span>
          <span className="dashboard-type-quantity">(0) </span>
        </Link>
      </div>
    </>
  );
};

export default UserDashboard;
