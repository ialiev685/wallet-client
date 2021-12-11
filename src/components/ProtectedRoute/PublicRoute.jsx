import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate } from 'react-router-dom';

function PublicRoute({ children, restricted = false }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home';

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    return <Navigate to={from} />;
  }
  return children;
}

export default PublicRoute;
