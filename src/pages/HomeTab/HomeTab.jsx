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
      <Background className={s.backdrop}>
        <Section className={s.hometabBackground}>
          <Container>
            <div className={s.hometab}>
              <div className={s.leftSideBox}>
                <div>
                  <div className={s.navigation}>
                    <Navigation />
                  </div>
                  <div className={s.balance}>
                    <Balance />
                  </div>
                </div>
                {!isMobile && <Currency />}
              </div>
              <div className={s.table}>
                <TableTransaction data={transactions} titles={TableTitleData} />
              </div>
              <div className={s.btnAdd}>
                <ButtonAddTransactions />
              </div>
            </div>
          </Container>
        </Section>
      </Background>
    </>
  );
};
