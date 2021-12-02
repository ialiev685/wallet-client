import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/finance';

const Balance = () => {
  const totalBalance = useSelector(authSelectors.totalBalance);
  return (
    <div>
      <p>ваш баланс</p>
      <p>{totalBalance}</p>
    </div>
  );
};

export default Balance;
