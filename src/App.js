// import './stylesheet/index.css'

import { useEffect, useState } from 'react';

// import { ModalTransaction } from 'components/ModalTransaction';

// import Currency from './components/Currency/Сurrency.jsx';

import { useDispatch, useSelector } from 'react-redux';
//import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm/LoginForm';

import { authOperations, authSelectors } from 'redux/auth';

// import Balance from './components/Balance';
// import Navigation from './components/Navigation';
import { HomeTab } from './pages/HomeTab/HomeTab';

// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/LoginForm/LoginForm';

import Header from 'components/Header';
// import Container from 'components/Container';
// import Section from 'components/Section';

// import Balance from 'components/Balance';
// import Navigation from './components/Navigation';
// import RegistrationPage from './pages/RegistrationPage';

// import Background from './pages/Background';

function App() {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };

  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <Header />
        <HomeTab />
      </div>
    )
  );
}

export default App;
