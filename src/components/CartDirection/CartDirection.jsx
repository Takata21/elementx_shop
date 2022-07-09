import React, { useState } from 'react';
import { useCart } from '../../context/provider/CartContext';
import { toast } from 'react-hot-toast';
import { RiErrorWarningLine } from 'react-icons/ri';
const CartDirection = ({ direction, setDirection }) => {
  const handleDirection = () => {
    if (direction.subsidiary === '') {
      toast.error('Deber llenar todos los campos', {
        position: 'bottom-right',
      });
    } else {
      setDirection(direction);
      toast.success('Dirección Agregada correctamente', {
        position: 'bottom-right',
      });
    }
  };

  const handleChange = (e) => {
    setDirection({ ...direction, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-md-8 col-xs-12 h-100 p-3 order-sm-2 order-xs-2 bg-light border rounded-3">
      <h3>Dirección de Entrega</h3>
      <form className="my-4">
        <div className="col-md-12">
          <div className="d-flex">
            <div className="input-group col pe-4">
              <select name="province" onChange={handleChange}>
                <option value="Bocas del Toro">Bocas del Toro</option>
                <option value="Cocle">Coclé</option>
                <option value="Colon">Colón</option>
                <option value="Chiriqui">Chiriquí</option>
                <option value="Darien">Darién</option>
                <option value="Herrera">Herrera</option>
                <option value="Los Santos">Los Santos</option>
                <option value="Panama">Panamá</option>
                <option value="Veraguas">Veraguas</option>
                <option value="Panama Oeste">El Panamá Oeste</option>
              </select>
              <label>Provincia</label>
            </div>
            <div className="input-group">
              <input
                onChange={handleChange}
                type="text"
                name="subsidiary"
                required
                placeholder=""
              />
              <label>Sucursal</label>
            </div>
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              type="text"
              name="subsidiary"
              required
              placeholder=""
            />
            <label>Información Adicional Importante</label>
          </div>
        </div>
        <div className=""></div>
        <div className="d-flex justify-content-end paypal-container">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleDirection()}
          >
            Aceptar
          </button>
        </div>
        <div className="shipping-warning">
          <small>
            <a
              href="http://unoexpresspanama.com/servicio/sucursales/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Verificar sucursales de unoExpress
            </a>
          </small>
        </div>
        <div className="shipping-warning">
          <small>Los envios son realizados por Unoexpress</small>
          <RiErrorWarningLine />
        </div>
      </form>
    </div>
  );
};

export default CartDirection;
