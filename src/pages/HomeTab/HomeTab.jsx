import { useMediaQuery } from 'react-responsive';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Container from 'components/Container';
import Section from 'components/Section';
import Background from 'pages/Background';
import TableTransaction from 'components/TableTransaction';

import Header from 'components/Header';
import { financeSelectors, financeOperations } from 'redux/finance';

import { TableTitleData } from '../../data/tableData';
import s from './HomeTab.module.css';

const HomeTab = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const transactions = useSelector(financeSelectors.data);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchDataForTable = useCallback(
    page => dispatch(financeOperations.fetchData(page)),
    [dispatch],
  );

  const handlerControlPage = page => {
    setPage(page);
  };

  useEffect(() => {
    fetchDataForTable(page);
  }, [dispatch, fetchDataForTable, page]);



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
                {transactions && (
                  <TableTransaction
                    numberPage={page}
                    data={transactions || []}
                    titles={TableTitleData}
                    className={s.table}
                    onPage={handlerControlPage}
                  />
                )}
                <ButtonAddTransactions className={s.btnAdd} />
              </div>
            </div>
          </Container>
        </Section>
      </Background>
    </>
  );
};

export default HomeTab;
