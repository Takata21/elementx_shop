import React, { useState } from 'react';
import './OrderDetails.css';
import { useAuth } from '../../context/provider/AuthContext';
import { useCart } from '../../context/provider/CartContext';
import { FaWindowClose } from 'react-icons/fa';
const OrderDetails = () => {
  const [closeModal, setCloseModal] = useState(true);
  const handleModal = () => {
    setCloseModal(!closeModal);
  };
  const { user } = useAuth();
  const { items, totalPrice } = useCart();
  let tax = 0;

  tax = totalPrice * 0.07;
  return (
    <div
      className={
        closeModal
          ? 'order_details-container'
          : 'order_details-container active'
      }
    >
      <div className="modal fade order_modal" id="staticBackdrop">
        <div className="modal-dialog">
          <div className="modal-content" style={{ borderRadius: '0px' }}>
            <div className="modal-body ">
              <div className="order_details-right">
                <button
                  className="order_details-close_btn"
                  onClick={() => handleModal()}
                >
                  <FaWindowClose />
                </button>
              </div>

              <div className="px-4 py-4">
                <div className="" style={{ marginBottom: '10px' }}>
                  <img
                    src="/assets/img/LogoElementx.svg"
                    alt="Logo Elementx"
                    width={50}
                  />
                  <img
                    src="/assets/img/LettersElementxBlack.svg"
                    alt="Logo Elementx letters"
                    width={100}
                  />
                </div>
                <h5 className="text-uppercase">{`${user?.name} ${user?.surname}`}</h5>

                {/* <h4 className="mt-5 theme-color mb-5">Thanks for your order</h4> */}
                <h4 className="mt-5 theme-color mb-5">Gracias por su compra</h4>

                <span className="theme-color">Resumen de pago</span>
                {/* <span className="theme-color">Payment Summary</span> */}
                <div className="mb-3">
                  <hr className="new2" />
                  {}
                </div>
                {items?.map((item) => (
                  <div
                    className="d-flex justify-content-between"
                    key={item._id}
                  >
                    <span className="font-weight-bold">{`${item.name}(Qty:${item.quantity})`}</span>
                    <span className="text-muted">
                      ${new Intl.NumberFormat().format(item?.price)}
                    </span>
                  </div>
                ))}
                {/* {products.map((product) => {
                  return <ProductCard product={product} key={product._id} />;
                })} */}

                <div className="d-flex justify-content-between">
                  <small>Envio</small>
                  <small>20.00</small>
                </div>

                <div className="d-flex justify-content-between">
                  <small>IVA</small>
                  <small>{new Intl.NumberFormat().format(tax)}</small>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <span className="font-weight-bold">Total</span>
                  <span className="font-weight-bold theme-color">
                    ${totalPrice + tax}
                  </span>
                </div>

                <div className="text-center mt-5">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleModal()}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
