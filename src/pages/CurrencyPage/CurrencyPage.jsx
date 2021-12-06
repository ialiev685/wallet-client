import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Currency from 'components/Currency/Сurrency';
import Container from 'components/Container';
import Section from 'components/Section';

import s from './CurrencyPage.module.css';

export const CurrencyPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      <Section className={s.currencyBackground}>
        <Container>
          {isMobile ? (
            <>
              <Navigation className={s.navigation} />
              <Currency />
            </>
          ) : (
            <Navigate to="/home" />
          )}
        </Container>
      </Section>
    </>
  );
};
