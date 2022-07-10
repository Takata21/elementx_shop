import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import styles from './ErrorMessageBox.module.css';
const ErrorMessageBox = ({ message }) => {
  return (
    <div className={styles.alertContainer}>
      <h4 className="a-alert-heading">Se produjo un problema</h4>
      <div className="a-alert-content">
        <FiAlertTriangle
          color="#c40000"
          size={'35px'}
          className={styles.iconAlert}
        />
        <span className="a-list-item">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessageBox;
