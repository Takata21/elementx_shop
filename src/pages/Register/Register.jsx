import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/provider/AuthContext';
import './Register.css';
const Register = () => {
  const { errorMessage, isLoading, signup, isLoggedIn } = useAuth();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    birthday: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await signup(user);
      if (userResponse) {
        navigate('/login');
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
        <h1>Unauthorized</h1>
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
        <form onSubmit={handleSubmit}>
          <h4>Crear cuenta</h4>
          <div className="form-control-container">
            <label htmlFor="name">nombre</label>
            <input name="name" id="name" onChange={handleChange} type="text" />
          </div>
          <div className="form-control-container">
            <label htmlFor="surname">apellido</label>
            <input
              name="surname"
              id="surname"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="email">correo electronico</label>
            <input
              name="email"
              id="email"
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="password">contraseña</label>
            <input
              name="password"
              id="password"
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="password2">confirmar contraseña</label>
            <input
              name="password2"
              id="password2"
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input
              name="birthday"
              id="birthday"
              onChange={handleChange}
              type="date"
            />
          </div>
          <button className="register-btn" type="submit">
            Registrar
          </button>
        </form>
        <hr />
        <small>
          ¿Ya tienes una cuenta?
          <Link to="/login">Iniciar sesión</Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
