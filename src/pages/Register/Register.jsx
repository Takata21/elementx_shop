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

  const [error, setError] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'username':
          if (!value) {
            stateObj[name] = 'Por favor ingrese un email.';
          }
          break;

        case 'password':
          if (!value) {
            stateObj[name] = 'Por favor ingrese su contraseña.';
          } else if (user.confirmPassword && value !== user.confirmPassword) {
            stateObj['confirmPassword'] = 'Las contraseña no coinciden.';
          } else {
            stateObj['confirmPassword'] = user.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Por favor ingrese Confirmar Contraseña.';
          } else if (user.password && value !== user.password) {
            stateObj[name] = 'Las contraseña no coinciden.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await signup(user);
      if (userResponse) {
        navigate('/login');
        toast.success('Registrado correctamente', {
          position: 'top-center',
        });
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
        <form onSubmit={handleSubmit}>
          <h4>Crear cuenta</h4>
          <div className="form-control-container">
            <label htmlFor="name">nombre</label>
            <input
              required
              name="name"
              id="name"
              onChange={onInputChange}
              onBlur={validateInput}
              type="text"
              value={user.name}
            />
            <div className="password-error">
              {error.name && <small className="err">{error.name}</small>}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="surname">apellido</label>
            <input
              required
              name="surname"
              id="surname"
              onChange={onInputChange}
              onBlur={validateInput}
              type="text"
              value={user.surname}
            />
            <div className="password-error">
              {error.surname && <small className="err">{error.surname}</small>}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="email">correo electronico</label>
            <input
              required
              name="email"
              id="email"
              onChange={onInputChange}
              onBlur={validateInput}
              type="email"
              value={user.email}
            />
            <div className="password-error">
              {error.email && (
                <small className="err">{error.confirmPassword}</small>
              )}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="password">contraseña</label>
            <input
              required
              name="password"
              id="password"
              onChange={onInputChange}
              onBlur={validateInput}
              type="password"
              value={user.password}
            />
            <div className="password-error">
              {error.password && (
                <small className="err">{error.password}</small>
              )}
            </div>
          </div>
          <div className="form-control-container">
            <label htmlFor="confirmPassword">confirmar contraseña</label>
            <input
              required
              name="confirmPassword"
              id="confirmPassword"
              onChange={onInputChange}
              onBlur={validateInput}
              type="password"
              value={user.confirmPassword}
            />
            <div className="password-error">
              {error.confirmPassword && (
                <small className="err">{error.confirmPassword}</small>
              )}
            </div>
            <div className="password-error"></div>
          </div>
          <div className="form-control-container">
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input
              required
              name="birthday"
              id="birthday"
              onChange={onInputChange}
              onBlur={validateInput}
              type="date"
              value={user.birthday}
            />
            <div className="password-error">
              {error.birthday && (
                <small className="err">{error.birthday}</small>
              )}
            </div>
          </div>
          <button className="register-btn" type="submit">
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
