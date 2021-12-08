import { Route, Routes, Navigate } from 'react-router-dom';

// import './stylesheet/index.css';

// import TableTransaction from 'components/TableTransaction';
// import TableStatistic from 'components/TableStatistic';

// import {
//   TableData,
//   TableTitleData,
//   TableStatisticData,
//   TableStatisticTitleData,
// } from 'data/tableData';

// import './stylesheet/index.css'

import { useEffect, useState } from 'react';

// import { ModalTransaction } from 'components/ModalTransaction';

// import Currency from './components/Currency/Сurrency.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { HomeTab } from './pages/HomeTab/HomeTab';
import { CurrencyPage } from './pages/CurrencyPage/CurrencyPage';
import PrivateRoute from './components/ProtectedRoute/PrivateRoute';
import PublicRoute from './components/ProtectedRoute/PublicRoute';
import Header from 'components/Header';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import Loader from './components/Loader';

function App() {
  //проверка на текущего пользователя (не удалять)
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
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
                // <PublicRoute restricted>
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                // <PublicRoute restricted>
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login">
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

      <Loader />
    </>
  );
}

export default App;
