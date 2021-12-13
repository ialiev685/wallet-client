// import { useMediaQuery } from 'react-responsive';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ButtonAddTransactions from 'components/ButtonAddTransactions';

import TableTransaction from 'components/TableTransaction';
import { BasePage } from 'pages/BasePage/BasePage';

import { financeSelectors, financeOperations } from 'redux/finance';

import { TableTitleData } from '../../data/tableData';
import s from './HomeTab.module.css';

const HomeTab = () => {
  const transactions = useSelector(financeSelectors.data);
  const newTransactions = useSelector(financeSelectors.dataNewTransaction);

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
  }, [dispatch, fetchDataForTable, page, newTransactions]);

  return (
    <>
      <BasePage>
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
      </BasePage>
    </>
  );
};

export default HomeTab;
