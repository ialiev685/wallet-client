import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Route, useLocation, Navigate, useNavigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
//   if(!isAuth) {
//       return <Navigate to={redirectTo} />;
//   }
//   return <Route path={path} element={<Component />} />
// };

// export default PrivateRoute;

// const PrivateRoute = ({ children, redirectTo,...props }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); //не удалять
//   if(!isLoggedIn) {
//       return <Navigate to={redirectTo} />;
//   }
//   return <Route {...props}>{children} </Route>
// };

// export default PrivateRoute;
// function PrivateRoute({ children, redirectTo = '/login', storyPage }) {
// function PrivateRoute({ path, children, redirectTo = '/login' }) {
function PrivateRoute({ children, redirectTo, url }) {
  const location = useLocation();
  console.log('private', location);
  // const url = location.pathname;
  // console.log('url',url);

  // console.log(navigate);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); //не удалять
  // const isLoggedIn = true; //заглушка
  // const isLoggedIn = false; //заглушка
  // return isLoggedIn ? children : <Navigate to={redirectTo} state={{ from: location.pathname }}/>
  // return isLoggedIn ? children : <Navigate to={redirectTo} state={{ from: location.pathname }}/>
  if (!isLoggedIn) {
    // navigate()
    return <Navigate to={redirectTo} state={{ from: location }} />;
    // return <Navigate to='/login'/>;
  }
  // {
  //   /* <Navigate to={storyPage}  /> */
  // }
  // <Navigate to={url} replace={true}/>;
  // navigate({ ...location })
  return children;
}
// return <Navigate to={redirectTo}/>
// if (location.state === null && isLoggedIn) {
//   <Navigate to={location.pathname}/>
// }

export default PrivateRoute;
// function PrivateRoute({ path, children, redirectTo }) {
//   // const location = useLocation();
//   // console.log(location);
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn); //не удалять
//   // const isLoggedIn = true; //заглушка
//   // const isLoggedIn = false; //заглушка
//   return (
//     <Route
//       path={path}
//       render={() => (
//         isLoggedIn ? children : <Redirect to={redirectTo} />
//       )}
//     />
//   );
// if (!isLoggedIn) {
//   // return <Navigate to={redirectTo} state={{ from: location.pathname }} />;
//   return <Navigate to={redirectTo} state={{ from: location }} />;
// }

// return children;
// }

// export default PrivateRoute;

// function PrivateRoute({ path, children, redirectTo }) {
//   let isAuthenticated = getAuth();
//   return (
//     <Route
//       path={path}
//       render={() => (
//         isAuthenticated ? children : <Redirect to={redirectTo} />
//       )}
//     />
//   );
// }
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
