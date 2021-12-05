// import './stylesheet/index.css'
import Currency from './components/Currency/Сurrency.jsx';

import { useEffect } from 'react';
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

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        {/* <RegistrationForm /> */}
        {/* <LoginForm /> */}
        <Header />
        <Section>
          <Container>
            {/* <RegistrationPage /> */}
            <Currency />
          </Container>
        </Section>

        {/* <Navigation /> */}
        {/* <Balance /> */}
      </>
    )
  );
}

export default App;
