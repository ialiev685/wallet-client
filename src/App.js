import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

// import './stylesheet/index.css';
import TableTransaction from 'components/TableTransaction';
import TableStatistic from 'components/TableStatistic';
import {
  TableData,
  TableTitleData,
  TableStatisticData,
  TableStatisticTitleData,
} from 'data/tableData';
import { ModalTransaction } from 'components/ModalTransaction';

import PrivateRoute from './components/ProtectedRoute/PrivateRoute';
import PublicRoute from './components/ProtectedRoute/PublicRoute';

import Header from 'components/Header';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import Loader from './components/Loader';



import NotFound from './components/NotFound';

import Background from './pages/Background';


import ButtonAddTransactions from 'components/ButtonAddTransactions';

// import  HomeTab  from './pages/HomeTab/HomeTab'; // замена динамич. импорт
// import CurrencyPage from './pages/CurrencyPage/CurrencyPage'; // замена динамич. импорт
// import RegistrationPage from './pages/RegistrationPage'; // замена динамич. импорт
// import LoginPage from './pages/LoginPage'; // замена динамич. импорт

const HomeTab = lazy(() =>
  import('./pages/HomeTab/HomeTab' /* webpackChunkName: "homeTab-page" */),
);
const CurrencyPage = lazy(() =>
  import(
    './pages/CurrencyPage/CurrencyPage' /* webpackChunkName: "currency-page" */
  ),
);
const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
// const DashboardPage = lazy(() =>
//     import('./pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
// );

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


          <Suspense fallback={<h1>Loading...</h1>}>
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
          </Suspense>


        </>
      ) : (
        <Header />
      )}

      <Loader />
    </>
  );
}

export default App;
