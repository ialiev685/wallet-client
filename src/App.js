// import './stylesheet/index.css';

import TableTransaction from 'components/BasicTable/TableTransaction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import { TableData, TableTitleData } from 'data/tableData';

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
        <div>
          <TableTransaction data={TableData} titles={TableTitleData} />
        </div>
      </div>
    )
  );
}

export default App;
