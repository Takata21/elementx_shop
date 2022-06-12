import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="register">
      <Link to="/">
        <img
          src="./assets/img/LogoElementx.svg"
          alt=""
          className="register-logo"
        />
        <img
          src="./assets/img/LettersElementxBlack.svg"
          alt=""
          className="register-letter-logo"
        />
      </Link>
      <div className="register-container">
        <form>
          <h4>Iniciar Sesion</h4>

          <div className="form-control-container">
            <label htmlFor="">correo electronico</label>
            <input type="email" />
          </div>
          <div className="form-control-container">
            <label htmlFor="">contraseña</label>
            <input type="password" />
          </div>

          <button className="register-btn" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <hr />
        <small>
          ¿Eres nuevo en ElementX?
          <Link to="/register">Crear una cuenta</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
