import { useSelector } from 'react-redux';
import { financeSelectors } from 'redux/finance';
import s from './Balance.module.css';

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.totalBalance);
  return (
    <div className={s.balanceBox}>
      <p>ваш баланс</p>
      <p>{totalBalance}</p>
    </div>
  );
};

export default Balance;
