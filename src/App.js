// import './stylesheet/index.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import { authOperations, authSelectors } from 'redux/auth';

import Balance from './components/Balance';
import Navigation from './components/Navigation';




function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <RegistrationForm />
        <Navigation />
        <Balance />
      </div>
    )
  );
}

export default App;
