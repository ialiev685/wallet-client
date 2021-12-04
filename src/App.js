
// import './stylesheet/index.css'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "./redux/auth";
import Currency from './components/Currency/Currency.jsx';

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (


    !isFetchingCurrentUser && (
      <div className="App">
        <h1>Wallet</h1>
        <Currency />
      </div>
    )

  );
}

export default App;
