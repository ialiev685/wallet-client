import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';

import Currency from 'components/Currency';

import s from './CurrencyPage.module.css';
import { BasePage } from '../BasePage/BasePage';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      <BasePage className={s.navigation}>
        {isMobile ? (
          <>
            <Currency />
          </>
        ) : (
          <Navigate to="/home" />
        )}
      </BasePage>
    </>
  );
};

export default CurrencyPage;
