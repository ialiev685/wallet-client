import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // if (!isloggedIn) {
  if (isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}

export default PrivateRoute;
// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router';
// import { authSelectors } from 'redux/auth';

// function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
//   const isloggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return (
//     <Route {...routeProps}>
//       {isloggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }

// export default PrivateRoute;
