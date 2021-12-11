import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate } from 'react-router-dom';

function PrivateRoute({ children, redirectTo }) {
  const location = useLocation();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
