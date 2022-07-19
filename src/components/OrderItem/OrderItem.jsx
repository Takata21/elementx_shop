import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderItem.module.css';
const OrderItem = ({ order }) => {
  const date = new Date(order.createdAt);

  return (
    <article className={styles.item}>
      <div className={styles.itemLeft}>
        <div className={styles.orderCell}>
          <span>pedido realizado</span>
          <p>{date.toDateString()}</p>
        </div>
        <div className={styles.orderCell}>
          <span>total</span>
          <p>
            $
            {new Intl.NumberFormat('en-IN', {
              maximumSignificantDigits: 2,
            }).format(order.amount)}
          </p>
        </div>
        <div className={styles.orderCell}>
          <span>enviado a</span>
          <p>{order.branch}</p>
        </div>
      </div>
      <div className={styles.orderNumberContainer}>
        <div className={styles.orderNumber}>
          <span>order #</span>
          <p>{order._id.substring(0, 8)}...</p>
        </div>
        <div className={styles.itemRight}>
          <Link to={`/profile/orders/${order._id}`}>detalles</Link>
          <p
            className={
              order.orderStatus === 'pending'
                ? styles.pending
                : order.orderStatus === 'complete'
                ? styles.complete
                : styles.rejected
            }
          >
            {order.orderStatus}
          </p>
          {/* <Link to="/">Factura</Link> */}
          <Link to="/profile/orders/498y9389t3t934y8"></Link>
        </div>
      </div>
    </article>
  );
};

export default OrderItem;
