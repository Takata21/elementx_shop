import React from 'react';

const Login = () => {
  return (
    <div className="register">
      <div className="register-container">
        <img src="./assets/img/LogoElementx.svg" alt="" />
        <img src="./assets/img/LettersElementx.svg" alt="" />
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

          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
