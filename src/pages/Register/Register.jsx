import React from 'react';
import './Register.css';
const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <img src="./assets/img/LogoElementx.svg" alt="" />
        <img src="./assets/img/LettersElementx.svg" alt="" />
        <form>
          <h4>Crear cuenta</h4>
          <div className="form-control-container">
            <label htmlFor="">nombre</label>
            <input type="text" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">apellido</label>
            <input type="text" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">correo electronico</label>
            <input type="email" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">contraseña</label>
            <input type="password" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">confirmar contraseña</label>
            <input type="password" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">Fecha de nacimiento</label>
            <input type="date" />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
