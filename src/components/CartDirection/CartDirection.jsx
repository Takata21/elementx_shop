import React, { useState } from 'react';
import { useCart } from '../../context/provider/CartContext';
import { toast } from 'react-hot-toast';
const CartDirection = () => {
  const [direction, setDirection] = useState({
    address: '',
    aptHou: '',
    province: 'Bocas del Toro',
    references: '',
    additionalDesc: '',
  });

  const { addDirection } = useCart();

  const handleDirection = () => {
    if (
      direction.address === '' ||
      direction.aptHou === '' ||
      direction.references === '' ||
      direction.additionalDesc === ''
    ) {
      toast.error('Deber llenar todos los campos');
    } else {
      addDirection(direction);
      toast.success('Dirección Agregada correctamente', {
        position: 'bottom-right',
      });
    }
  };
  const handleChange = (e) => {
    setDirection({ ...direction, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-md-4 col-xs-12 h-100 p-3 order-sm-2 order-xs-2 bg-light border rounded-3">
      <form>
        <div className="col-md-12">
          <div className="input-group">
            <input
              onChange={handleChange}
              type="text"
              name="address"
              required
              placeholder=""
            />
            <label>Dirección </label>
          </div>
          <div className="d-flex">
            <div className="input-group col">
              <input
                onChange={handleChange}
                type="text"
                name="aptHou"
                required
              />
              <label>N° apto/casa</label>
            </div>
          </div>

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
            <div className="input-group col">
              <input
                onChange={handleChange}
                type="text"
                name="references"
                required
              />
              <label>Referencia</label>
            </div>
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              type="text"
              name="additionalDesc"
              required
              placeholder=""
            />
            <label>Descripcion Adicional</label>
          </div>
        </div>
        <div
          className="d-flex justify-content-end paypal-container"
          onClick={() => handleDirection()}
        >
          <button type="button" class="btn btn-success">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartDirection;
