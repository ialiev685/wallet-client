// import './stylesheet/index.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import Navigation from '../src/components/Navigation';

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <Navigation />
      </div>
    )
  );
}

export default App;
