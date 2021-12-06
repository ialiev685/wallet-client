// import './stylesheet/index.css'

import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

// import { ModalTransaction } from 'components/ModalTransaction';

// import Currency from './components/Currency/Сurrency.jsx';

import { useDispatch, useSelector } from 'react-redux';
//import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm/LoginForm';

import { authOperations, authSelectors } from 'redux/auth';

// import Balance from './components/Balance';
// import Navigation from './components/Navigation';
import { HomeTab } from './pages/HomeTab/HomeTab';
import { CurrencyPage } from './pages/CurrencyPage/CurrencyPage';
import PrivateRoute from './components/ProtectedRoute/PrivateRoute';
import PublicRoute from './components/ProtectedRoute/PublicRoute';

// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm/LoginForm';

import Header from 'components/Header';
// import Container from 'components/Container';
// import Section from 'components/Section';

// import Balance from 'components/Balance';
// import Navigation from './components/Navigation';
import RegistrationPage from './pages/RegistrationPage';
// import LoginPage from './pages/LoginPage';

// import Background from './pages/Background';

function App() {
  //проверка на текущего пользователя (не удалять)
  // const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const isFetchingCurrentUser = true; //заглушка для рендера приватных роутов

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <>
          <Routes>
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  {/* //страница логина */}
                  {/* <LoginPage/> */}
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login">
                  <Header />
                  <HomeTab />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagram"
              element={
                <PrivateRoute redirectTo="/login">
                  <Header />
                  {/* //страница с диаграммой DashboardPage*/}
                </PrivateRoute>
              }
            />
            <Route
              path="/currency"
              element={
                <PrivateRoute redirectTo="/login">
                  <Header />
                  <CurrencyPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      ) : (
        <Header />
      )}
    </>
  );
  // return (
  //   !isFetchingCurrentUser && (
  //     <div className="App">
  //       <Header />

  //       <HomeTab />
  //     </div>
  //   )
  // );
}

export default App;
