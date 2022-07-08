import { Navigate, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/provider/AuthContext';

const ProtectedRoute = ({ children, ...properties }) => {
  let navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Route {...properties}>{children}</Route>;
  } else {
    navigate('/');
  }

  return children;
};

export default ProtectedRoute;
