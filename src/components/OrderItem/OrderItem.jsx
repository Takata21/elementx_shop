import React from 'react';
import './OrderItem.css';
const OrderItem = () => {
  return (
    <tr className="order-item">
      <td>1234</td>
      <td>jhon doe</td>
      <td>jhondow@gmail.com</td>
      <td>12.02.2021</td>
      <td>$234.00</td>
      <td>Cocle Penonome</td>
      <td>
        <span>completed</span>
      </td>
      {/* <td>completed</td> */}
    </tr>
  );
};

export default OrderItem;
