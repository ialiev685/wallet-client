import { useSelector } from 'react-redux';
import { financeSelectors } from 'redux/finance';
import s from './Balance.module.css';

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.totalBalance);
  return (
    <div className={s.balanceBox}>
      <p className={s.balanceText}>ваш баланс</p>
      <p className={s.balanceNum}>₴ 24 000.00</p>
    </div>
  );
};

export default Balance;
