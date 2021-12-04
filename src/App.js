// import './stylesheet/index.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { ModalTransaction } from 'components/ModalTransaction';

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
        <h1>Wallet</h1>
        <button onClick={() => setShowModal(prevShowModal => !prevShowModal)}>
          Показать модалку
        </button>
        {/*тестовая кнопка, удалить после установки боевой*/}
        {showModal && <ModalTransaction onClose={toggleModal} />}
      </div>
    )
  );
}

export default App;
