import React from 'react';
import { useLocation, Navigate, useNavigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

// export const ProtectedRoute = ({children}) => {
// const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
// let location = useLocation();
// console.log('protected',location);
//     // if(isLoggedIn){
//     //     children;
//     //     <Navigate to={location.pathname}/>

//     // }
//     // return children
//     if(!isLoggedIn){
//         return <Navigate to="/login" state={{ from: location }} />
//     }
//     // <Navigate to={location.pathname}/>
//     return children
// }
export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  let location = useLocation();
  console.log('protected', location);
  // if(isLoggedIn){
  //     children;
  //     <Navigate to={location.pathname}/>

  // }
  // return children
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  // <Navigate to={location.pathname}/>
  return children;
};
