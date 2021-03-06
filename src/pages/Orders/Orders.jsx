import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import OrderItem from '../../components/OrderItem/OrderItem';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import './Orders.css';
import { useOrders } from '../../context/provider/OrderContext';
const Orders = () => {
  const { orders } = useOrders();
  return (
    <div className="orders-container">
      <ProfileMenu />
      <section className="orders">
        <div className="orders-head">
          <div className="orders-left">
            <h3>Ordenes</h3>
            <small>{orders.length} Odernes encontradas</small>
          </div>
          <div className="orders-right"></div>
        </div>
        <div className="orders-filters-container">
          <div className="orders-search">
            <input
              type="text"
              name="orderSearch"
              id="OrderSearch"
              placeholder="Search"
            />
          </div>
          <div className="orders-filters">
            <select
              className="order-select"
              name="OrderStatus"
              id="OrderStatus"
            >
              <option value="complete">Complete</option>
              <option value="pending">Pending</option>
              <option value="canceled">Canceled</option>
            </select>
            <select
              className="order-select"
              name="orderQuantity"
              id="orderQuantity"
            >
              <option value="10">Mostrar 10</option>
              <option value="20">Mostrar 20</option>
              <option value="30">Mostrar 30</option>
              <option value="40">Mostrar 40</option>
            </select>
            <select className="order-select" name="sortDate" id="sortDate">
              <option value="0">Fecha ⬆⬇</option>
              <option value="1">Fecha ⬆</option>
              <option value="2">Fecha ⬇</option>
            </select>
          </div>
        </div>
        <div className="orders_items-container">
          {orders.map((order, index) => (
            <OrderItem order={order} key={index} />
          ))}
        </div>
        <div className="orders-pagination">
          <button>Anterior</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Siguiente</button>
        </div>
      </section>
    </div>
  );
};

export default Orders;
