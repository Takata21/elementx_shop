import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/provider/AuthContext';

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { signin, isLoading, errorMessage } = useAuth();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await signin(user);
      if (userResponse) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <h4>Iniciar Sesion</h4>

          <div className="form-control-container">
            <label htmlFor="email">correo electronico</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="password">contraseña</label>
            <input
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              required
            />
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
