import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useLocation, Navigate, useNavigate, Route } from 'react-router-dom';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/login',
  path,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/home';
  // let from = location.state?.from?.pathname || "/";
  // console.log('from',from);
  console.log('public', location);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); //не удалять
  // const isLoggedIn = true; //заглушка
  // const isLoggedIn = false; //заглушка
  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    // return <Navigate to={redirectTo} />;
    return <Navigate to={from} />;
    // <Navigate to={from} />;
    // return <Navigate to={redirectTo}  />;
    // return navigate(from, { replace: true });
  }
  // if(!shouldRedirect){
  // if(from){
  // navigate(from, { replace: true })
  //  return <Navigate to={location.pathname} />;
  // }
  // <Navigate to={from}/>
  return children;
}
// children
// return <Navigate to={from}/>;
// children
// };
// return <Route path={from} element={children} />
// }

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
