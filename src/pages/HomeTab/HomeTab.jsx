import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Сurrency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Container from 'components/Container';
import Section from 'components/Section';
import Background from 'pages/Background';
import TableTransaction from 'components/TableTransaction';
import Header from 'components/Header/Header';
import { financeSelectors, financeOperations } from 'redux/finance';

import { TableData, TableTitleData } from '../../data/tableData';
import s from './HomeTab.module.css';

export const HomeTab = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const transactions = useSelector(financeSelectors.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(financeOperations.fetchData());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Background className={s.backdrop}>
        <Section className={s.hometabBackground}>
          <Container className={s.container}>
            <div className={s.border}></div>
            <div className={s.hometab}>
              <div className={s.leftSideBox}>
                <div>
                  <Navigation className={s.navigation} />
                  <Balance className={s.balance} />
                </div>
                {!isMobile && <Currency />}
              </div>
              <div className={s.rightSideBox}>
                <TableTransaction
                  data={transactions || []}
                  titles={TableTitleData}
                  className={s.table}
                />
                <ButtonAddTransactions className={s.btnAdd} />
              </div>
            </div>
          </Container>
        </Section>
      </Background>
    </>
  );
};
