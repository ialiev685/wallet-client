// import './stylesheet/index.css'

import { useEffect, useState } from 'react';

import { ModalTransaction } from 'components/ModalTransaction';

import Currency from './components/Currency/Сurrency.jsx';

import { useDispatch, useSelector } from 'react-redux';

// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';

import { authOperations, authSelectors } from 'redux/auth';

import Header from 'components/Header';
import Container from 'components/Container';
import Section from 'components/Section';

import Balance from 'components/Balance';
import Navigation from './components/Navigation';
import RegistrationPage from './pages/RegistrationPage';

import Background from './pages/Background';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        {/* <RegistrationForm /> */}
        {/* <LoginForm /> */}
        <Header />
        <Section>
          <Container>
            <Background>
              <RegistrationPage />
            </Background>

            <LoginForm />

            <ButtonAddTransactions />

            <Currency />
          </Container>
        </Section>

        {/* <Navigation /> */}
        {/* <Balance /> */}

      </div>
    )
  );
}

export default App;
