import { useState } from 'react';
import { useEffect } from 'react';

export function useOptions(params) {
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
      if (province === 'zone_1') {
        setBranchs(unoExpress[0].branchs);
      } else if (province === 'zone_2') {
        setBranchs(unoExpress[2].branchs);
      } else if (province === 'zone_3') {
        setBranchs(unoExpress[1].branchs);
      } else {
      }
    }
    handleBranch();
  }, [province]);
  return { handleProvince, branchs, province };
}
