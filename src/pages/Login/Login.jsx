import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/provider/AuthContext';
import './Login.css';
const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { signin, isLoading, errorMessage, isLoggedIn } = useAuth();
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
  useEffect(() => {
    const verifyLogin = () => {
      if (isLoggedIn) {
        navigate('/');
      }
    };
    verifyLogin();
  }, []);
  if (isLoggedIn) {
    return (
      <div className="register">
        <h1>Cargando....</h1>
      </div>
    );
  }
  return (
    <div className="register">
      <Link to="/">
        <img
          src="/assets/img/LogoElementx.svg"
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
        <form onSubmit={handleSubmit} className="login-form">
          <h4>Iniciar Sesion</h4>

          <div className="form-control-container login-form-control">
            <label htmlFor="email">correo electronico</label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="form-control-container login-form-control">
            <label htmlFor="password">contraseña</label>
            <input
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <button
            className="register-btn login-btn"
            type="submit"
            disabled={!user.email || !user.password || isLoading}
          >
            {isLoading ? (
              <>
                <TailSpin />
                <span>cargando</span>
              </>
            ) : (
              <span> Iniciar Sesión</span>
            )}
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
