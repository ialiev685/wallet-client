import LoaderSpiner from 'react-loader-spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { financeSelectors } from 'redux/finance';
import { loaderAction, loaderSelectors } from 'redux/loader';
import s from './Loader.module.css';

function Loader() {
  const authLoader = useSelector(authSelectors.getIsAuthLoader);
  const financeLoader = useSelector(financeSelectors.getIsFinanceLoader);
  const showLoader = useSelector(loaderSelectors.getIsLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authLoader || financeLoader) {
      dispatch(loaderAction.showLoader());
    }

    if (!authLoader || !financeLoader) {
      dispatch(loaderAction.hideLoader());
    }
  }, [authLoader, dispatch, financeLoader]);

  const { loader } = s;

  return (
    <div className={loader}>
      {showLoader && (
        <LoaderSpiner type="Puff" color="#4A56E2" height={80} width={80} />
      )}
    </div>
  );
}

export default Loader;
