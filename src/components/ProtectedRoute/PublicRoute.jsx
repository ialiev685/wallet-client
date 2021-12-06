import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // if (!isloggedIn) {
  if (isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}

export default PublicRoute;

// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

// function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isloggedIn && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }

// export default PublicRoute;
