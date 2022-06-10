import React from 'react';
import { FaStar } from 'react-icons/fa';
const Valoration = ({ number }) => {
  let stars = [];

  for (let index = 0; index < number; index++) {
    stars.push(
      <span key={index}>
        <FaStar color="#ff7e38" />
      </span>
    );
  }
  return <div className="">{stars}</div>;
};

export default Valoration;
