// import './stylesheet/index.css'


import { useEffect, useState } from 'react';


import { ModalTransaction } from 'components/ModalTransaction';

import Currency from './components/Currency/Сurrency.jsx';


import { useDispatch, useSelector } from 'react-redux';

// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';




import { authOperations, authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Section from 'components/Section';


import Balance from 'components/Balance';
import Navigation from './components/Navigation';
import RegistrationPage from './pages/RegistrationPage';





function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

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
                 <RegistrationPage />
  <button onClick={() => setShowModal(prevShowModal => !prevShowModal)}>
          Показать модалку
        </button>
        {/*тестовая кнопка, удалить после установки боевой*/}
        {showModal && <ModalTransaction onClose={toggleModal} />}
    
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
