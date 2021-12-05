// import './stylesheet/index.css'

import Currency from './components/Currency/Сurrency.jsx';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';

import { authOperations, authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Section from 'components/Section';

import Balance from 'components/Balance';
import Navigation from './components/Navigation';
import RegistrationPage from './pages/RegistrationPage';
import Background from './pages/Background';

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
        <Section>
          <Container>
            <Background>
              <RegistrationPage />
            </Background>

            <LoginForm />
            <Currency />
          </Container>
        </Section>

        {/* <RegistrationForm /> */}

        {/* <Navigation /> */}
        {/* <Balance /> */}
      </div>
    )
  );
}

export default App;
