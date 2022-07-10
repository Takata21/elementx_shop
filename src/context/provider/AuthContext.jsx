import { createContext, useContext, useReducer } from 'react';
import { register, login, profile } from '../../api/authAPI';
import { AuthActions } from '../actions/authActions';
import { initialState, authReducer } from '../reducer/authReducer';

export const AuthContext = createContext(initialState);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('must be in an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async ({ name, surname, email, password, birthday }) => {
    dispatch({ type: AuthActions.AUTH_SIGNUP });

    try {
      const res = await register({ name, surname, email, password, birthday });
      const { token } = res.data;
      localStorage.setItem('etx_token', token);

      if (token) {
        const resUser = await profile(token);

        localStorage.setItem('etx_user', JSON.stringify(resUser.data));

        dispatch({
          type: AuthActions.AUTH_SIGNUP_SUCCESS,
          payload: {
            token,
            user: resUser.data,
          },
        });
        return resUser.data;
      }
    } catch (error) {
      if (error) {
        console.log(error);
        dispatch({
          type: AuthActions.AUTH_SIGNUP_ERROR,
          payload: error.response.data.message || 'error interno',
        });
      }
    }
  };

  const signin = async ({ email, password }) => {
    dispatch({ type: AuthActions.AUTH_SIGNIN });
    try {
      const res = await login({ email, password });
      console.log(res);
      const { token } = res.data;

      localStorage.setItem('etx_token', token);

      if (token) {
        const resUser = await profile(token);
        localStorage.setItem('etx_user', JSON.stringify(resUser.data));
        dispatch({
          type: AuthActions.AUTH_SIGNIN_SUCCESS,
          payload: {
            token,
            user: resUser.data,
          },
        });
        return resUser.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        dispatch({
          type: AuthActions.AUTH_SIGNUP_ERROR,
          payload: error.response.data.message,
        });
      }
    }
  };

  const logout = async () => {
    localStorage.clear();
    dispatch({ type: AuthActions.AUTH_LOGOUT });
  };
  return (
    <AuthContext.Provider value={{ ...state, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
