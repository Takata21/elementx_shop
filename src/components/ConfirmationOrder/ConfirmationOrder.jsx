import React, { useState } from 'react';
import './ConfirmationOrder.css';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
const ConfirmationOrder = () => {
  let params = useParams();
  return null;
  // <div className="confirmation_details-container active">
  //   <div className="confirmation_modal">
  //     <h3>Su orden fue recibida</h3>
  //     <FaCheckCircle color="#0e912c" size={50} />
  //     <p className="confirmation_modal-gratitude">Gracias por su compra!</p>
  //     <div className="confirmation_modal-id">
  //       <small>Su ID de compra es:</small>
  //       <small>{params.id}</small>
  //     </div>
  //     <small>Recibirá email con detalles de su compra</small>
  //     <Link to="/" className="confirmation_modal-btn">
  //       Continuar comprando
  //     </Link>
  //   </div>
  // </div>
};

export default ConfirmationOrder;
