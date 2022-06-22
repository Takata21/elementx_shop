import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/provider/AuthContext';
import './Register.css';
const Register = () => {
  const { errorMessage, isLoading, signup, isLoggedIn } = useAuth();
  let navigate = useNavigate();
  // toast.success('Successfull Payment');
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    verifyPassword(e);
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
            <input
              required
              name="name"
              id="name"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="surname">apellido</label>
            <input
              required
              name="surname"
              id="surname"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="email">correo electronico</label>
            <input
              required
              name="email"
              id="email"
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className="form-control-container">
            <label htmlFor="password">contraseña</label>
            <input
              required
              name="password"
              id="password"
              onChange={handleChange}
              type="password"
            />
            <div className="password-error">
              {errorPassword && <span>Las contraseñas deben ser iguales</span>}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="confirmPassword">confirmar contraseña</label>
            <input
              required
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
              type="password"
            />
            <div className="password-error">
              {errorPassword && <span>Las contraseñas deben ser iguales</span>}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input
              required
              name="birthday"
              id="birthday"
              onChange={handleChange}
              type="date"
            />
          </div>
          <button disabled className="register-btn" type="submit">
            {isLoading ? (
              <>
                <TailSpin />
                <span>cargando</span>
              </>
            ) : (
              <>
                <span>Registrar</span>
              </>
            )}
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
