import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Сurrency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

export const HomeTab = () => {
  return (
    <div>
      <Navigation />
      <Balance />
      <Currency />
      <ButtonAddTransactions />
    </div>
  );
};
