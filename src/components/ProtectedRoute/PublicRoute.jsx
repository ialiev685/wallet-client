import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate } from 'react-router-dom';

function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const location = useLocation();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); //не удалять
  const isLoggedIn = true; //заглушка
  // const isLoggedIn = false; //заглушка
  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectTo} state={{ from: location.pathname }} />;
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
