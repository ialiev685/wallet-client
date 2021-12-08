import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { financeSelectors, financeOperations } from 'redux/finance';
// console.log(financeSelectors);

import s from './Balance.module.css';

const Balance = ({ className = '' }) => {
  const sign = String.fromCharCode(8372);
  const totalBalance = useSelector(financeSelectors.totalBalance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(financeOperations.fetchTotalBalance());
  }, [dispatch]);

  return (
    <div className={`${s.balanceBox} ${className}`}>
      <p className={s.balanceText}>ваш баланс</p>
      <p className={s.balanceNum}>
        <span className={s.sign}>{sign} </span>{' '}
        {`${totalBalance.toLocaleString('ru')}.00`}
      </p>
    </div>
  );
};

export default Balance;
