import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors, financeOperations } from 'redux/finance';
// console.log(financeSelectors);

import s from './Balance.module.css';

const Balance = ({ className = '' }) => {
  const sign = String.fromCharCode(8372);
  const totalBalance = useSelector(financeSelectors.totalBalance);
  const transactions = useSelector(financeSelectors.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (transactions.length > 0) {
    if (!totalBalance) {
      dispatch(financeOperations.fetchTotalBalance());
    }
    // }
  }, [dispatch, totalBalance, transactions]);
  // }, [dispatch]);

  return (
    <div className={`${s.balanceBox} ${className}`}>
      <p className={s.balanceText}>ваш баланс</p>
      <p className={s.balanceNum}>
        <span className={s.sign}>{sign} </span>
        {`${totalBalance.toLocaleString('ru')}`}
      </p>
    </div>
  );
};

export default Balance;
