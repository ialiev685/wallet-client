// import './stylesheet/index.css'

import Currency from './components/Currency/Сurrency.jsx';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';

import { authOperations, authSelectors } from 'redux/auth';

import Balance from 'components/Balance';
import Navigation from './components/Navigation';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <RegistrationPage />
        <LoginForm />

        <Currency />

        {/* <RegistrationForm /> */}

        <Navigation />
        <Balance />
      </div>
    )
  );
}

export default App;
