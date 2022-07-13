import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import styles from './WarningMessage.module.css';
function WarningMessage({ text, children }) {
  return (
    <div className={styles.shipping_warning}>
      {text && <small>{text}</small>}
      {children}
      <RiErrorWarningLine />
    </div>
  );
}

export default WarningMessage;
