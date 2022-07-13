import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { RiErrorWarningLine } from 'react-icons/ri';
import WarningMessage from '../WarningMessage/WarningMessage';
import styles from './DirectionForm.module.css';
const DirectionForm = () => {
  const unoExpress = [
    {
      branchs: [
        'Vía Brasil',
        'Obarrio',
        'San Francisco',
        'Vista Hermosa',
        'Río Abajo',
        'Juan Díaz',
        'Los Andes',
        'Tumba Muerto',
        '24 de Diciembre',
        'La Chorrera',
        'Vista Alegra',
        'Colón',
        'Albrook',
        'Costa del Este',
        'Villa Lucre',
        'Justo Arosemena',
        'Marbella',
        'El Dorado',
        'Brisas del Golf',
        'Pricemart El Dorado',
        'Paseo Arraijan',
        'Villa Zaita',
        '12 de Octubre',
        'Las Acacias',
      ],
    },

    {
      branchs: [
        'David',
        'Boquete',
        'Volcán',
        'Bugaba',
        'Pto. Armuelles',
        'Frontera',
        'Changuinola',
        'Almirante',
        'Isla Colón',
      ],
    },
    {
      branchs: [
        ' Santiago',
        'Aguadulce',
        'Penonomé',
        'Chitré',
        'Las Tablas',
        'Gorgona',
        'El Valle de Antón',
      ],
    },
  ];

  const [province, setProvince] = useState('');
  const [branchs, setBranchs] = useState([]);
  const handleProvince = (e) => {
    setProvince(e.target.value);
  };
  useEffect(() => {
    function handleBranch() {
      if (province === 'pc') {
        setBranchs(unoExpress[0].branchs);
      } else if (province === 'ca') {
        setBranchs(unoExpress[2].branchs);
      } else if (province === 'cb') {
        setBranchs(unoExpress[1].branchs);
      } else {
      }
    }
    handleBranch();
  }, [province]);

  return (
    <div className={styles.form_container}>
      <h2>Datos de Entrega</h2>
      <form className={styles.form}>
        <div className={styles.form_control}>
          <label className={styles.form_title} htmlFor="province">
            Provincia
          </label>
          <select
            name="province"
            id="province"
            onChange={handleProvince}
            className={styles.select}
          >
            <option>---</option>
            <option value="pc">Ciudad de Panamá y Colón</option>
            <option value="ca">Azuero y Provincias Centrales</option>
            <option value="cb">Chiriquí y Bocas del Toro</option>
          </select>
        </div>
        {province && (
          <div className={styles.form_control}>
            <label className={styles.form_title} htmlFor="branc">
              Sucursal
            </label>
            <select name="branch" id="branch" className={styles.select}>
              {branchs?.map((branch, index) => (
                <option value={branch} key={index}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        )}
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
