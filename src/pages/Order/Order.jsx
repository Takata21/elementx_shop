import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import OrderItem from '../../components/OrderItem/OrderItem';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import styles from './Order.module.css';
import { getOrder } from '../../api/orderAPI';
const Order = () => {
  const params = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const loadOrder = async () => {
      const oder = await getOrder(params.id);
      setOrder(oder.data);
    };
    loadOrder();
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className={styles.orderSpinner}>
        <TailSpin color="#00BFFF" />
      </div>
    );
  }

  if (!Order) {
    return (
      <div className={styles.orderNotFound}>
        <p>Pedido no encontrado</p>
        <Link to="/profile/orders">Regresar</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <section>
        <ProfileMenu />
      </section>
      <section className={styles.order}>
        <div className={styles.orderHead}>
          <h1 className={styles.orderTitle}>
            Id de Orden:
            <span className={styles.orderNumber}> {order?._id}</span>
          </h1>
          <div className=""></div>
        </div>
        <div className={styles.orderBody}>
          <table className={styles.itemSummary}>
            <thead>
              <tr>
                <th className="order-number">artículo</th>
                <th className="order-status">Cant.</th>
                <th className="order-total">Precio</th>
                <th className="order-actions">Precio Total</th>
              </tr>
            </thead>

            <tbody>
              {order.products?.map((product) => (
                <tr className="order" key={product._id}>
                  <td className="order-number" data-title="Artículo">
                    {product.name}
                  </td>

                  <td data-title="Cant.">
                    <p>x{product.quantity}</p>
                  </td>

                  <td className="order-status" data-title="Precio">
                    ${product.price}
                  </td>

                  <td className="order-total" data-title="Precio Total">
                    <span className="amount">
                      ${product.price * product.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.customerDetails}>
            <div className={styles.customerDetail}>
              <h2 className={styles.customerDetailTitle}>
                detalles del cliente y del pedido
              </h2>
            </div>
            <div className={styles.customerDetail}>
              <h4 className={styles.customerDetailTitle}>Nombre del cliente</h4>
              <p className={styles.customerDetailContent}>{order?.name}</p>
            </div>
            <div className={styles.customerDetail}>
              <h4 className={styles.customerDetailTitle}>Numero de Teléfono</h4>
              <p className={styles.customerDetailContent}>6495 6520</p>
            </div>
            <div className={styles.customerDetail}>
              <h4 className={styles.customerDetailTitle}>tipo</h4>
              <p className={styles.customerDetailContent}>Entrega</p>
            </div>
            <div className={styles.customerDetail}>
              <h4 className={styles.customerDetailTitle}>Nota</h4>
              <p className={styles.customerDetailContent}>N/A</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rightPanel}>
        <div className={styles.orderSummary}>
          <h2 className={styles.orderSummaryTitle}>Resumen del pedido</h2>
          <div className={styles.orderSummaryContent}>
            <div className={styles.orderSummaryItem}>
              <span className={styles.orderSummaryItemTitle}>
                Fecha del pedido
              </span>
              <span className={styles.orderSummaryItemValue}>
                {new Date(order?.createdAt).toLocaleDateString()}
              </span>
            </div>
            {/* <div className={styles.orderSummaryItem}>
              <span className={styles.orderSummaryItemTitle}>
                Hora del Pedido
              </span>
              <span className={styles.orderSummaryItemValue}>
                {new Date(order?.createdAt).getHours()}
              </span>
            </div> */}
            <div className={styles.orderSummaryItem}>
              <span className={styles.orderSummaryItemTitle}>Subtotal</span>
              <span className={styles.orderSummaryItemValue}>
                $ {order?.amount - 20}
              </span>
            </div>
            <div className={styles.orderSummaryItem}>
              <span className={styles.orderSummaryItemTitle}>
                Gastos de envío
              </span>
              <span className={styles.orderSummaryItemValue}>$20.00</span>
            </div>
          </div>
        </div>
        <div className={styles.orderSummaryTotal}>
          <div className={styles.orderSummaryItem}>
            <span className={styles.orderSummaryItemTitle}>Total</span>
            <span className={styles.orderSummaryItemValue}>
              $ {order?.amount}
            </span>
          </div>
        </div>
        <div className={styles.DeliveryAddress}>
          <h4 className={styles.DeliveryAddressTitle}>Dirección de entrega</h4>
          <div className={styles.DeliveryAddressItem}>
            <span className={styles.DeliveryAddressItemTitle}>País: </span>
            <span className={styles.DeliveryAddressItemValue}>Panamá</span>
          </div>
          <div className={styles.DeliveryAddressItem}>
            <span className={styles.DeliveryAddressItemTitle}>Provincia: </span>
            <span className={styles.DeliveryAddressItemValue}>Coclé</span>
          </div>
          <div className={styles.DeliveryAddressItem}>
            <span className={styles.DeliveryAddressItemTitle}>Sucursal: </span>
            <span className={styles.DeliveryAddressItemValue}>Penonomé</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
