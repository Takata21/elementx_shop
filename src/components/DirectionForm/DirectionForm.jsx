import React, { useState, useEffect } from 'react';
import styles from './DirectionForm.module.css';
import { toast } from 'react-hot-toast';
import WarningMessage from '../WarningMessage/WarningMessage';
import { useOptions } from '../../hooks/useOptions';
import addDirection from '../../services/addDirection';

const DirectionForm = () => {
  const { branchs, handleProvince, province } = useOptions();
  const [direction, setDirection] = useState({
    phone: 0,
    note: '',
    province: '',
    branch: '',
  });

  function handleArea(e) {
    handleProvince(e);
    handleChange(e);
  }

  function handleChange(e) {
    setDirection({ ...direction, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let result = checkProperties();
    if (result) {
      toast('Todos los campos son obligatorios', {
        type: 'error',
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    // const response = await addDirection(direction);
    localStorage.setItem('etx_direction', JSON.stringify(direction));

    toast('Dirección agregada correctamente', {
      type: 'success',
      position: 'top-right',
      autoClose: 3000,
    });
  }

  function checkProperties() {
    const values = Object.values(direction);
    let result = values.map((item) => {
      if (item === '') {
        return true;
      }
      return false;
    });
    return result.includes(true);
  }
  return (
    <div className={styles.form_container}>
      <h2>Datos de Entrega</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_control}>
          <label className={styles.form_title} htmlFor="province">
            Provincia
          </label>
          <select
            name="province"
            id="province"
            onChange={handleArea}
            className={styles.select}
          >
            <option>---</option>
            <option value="zone_1">Ciudad de Panamá y Colón</option>
            <option value="zone_2">Azuero y Provincias Centrales</option>
            <option value="zone_3">Chiriquí y Bocas del Toro</option>
          </select>
        </div>
        {province && (
          <div className={styles.form_control}>
            <label className={styles.form_title} htmlFor="branch">
              Sucursal
            </label>
            <select
              name="branch"
              id="branch"
              className={styles.select}
              onChange={handleChange}
              required
            >
              {branchs?.map((branch, index) => (
                <option value={branch} key={index}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className={styles.form_control}>
          <label className={styles.form_title} htmlFor="phoneNumber">
            Telefono
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
            className={styles.form_input}
            required
          />
        </div>
        <div className={styles.form_control}>
          <label className={styles.form_title} htmlFor="note">
            Información adicional
          </label>
          <textarea name="note" id="note" rows="3" onChange={handleChange} />
        </div>
        <WarningMessage text="Los envios son realizados por Unoexpress" />

        <WarningMessage>
          <a
            href="http://unoexpresspanama.com/servicio/sucursales/"
            target="_blank"
            referrerpolicy="no-referrer"
          >
            Verificar sucursales de unoExpress
          </a>
        </WarningMessage>
        <div className={styles.btn_container}>
          <button type="submit" className={styles.btn}>
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DirectionForm;
