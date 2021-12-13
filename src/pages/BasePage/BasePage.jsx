import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import s from './BasePage.module.css';
import Section from 'components/Section';
import Header from 'components/Header';


export const BasePage = ({ children, className = '' }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <div className={s.basePage}>
      <Section className={s.headerSection}>
        <Container>
          <Header />
        </Container>
      </Section>
   
      <Section className={s.hometabBackground}>
        <Container className={s.container}>
          <div className={s.border}></div>
          <div className={s.hometab}>
            <div className={s.leftSideBox}>
              <div>
                <Navigation className={`${s.navigation} ${className}`} />
                {!isMobile && <Balance className={s.balance} />}
              </div>
              {!isMobile && <Currency />}
            </div>
            <div className={s.rightSideBox}>
              {children}
             
            </div>
          </div>
        </Container>
      </Section>
   
    </div>
  );
};
