import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from 'redux/finance';
import Chart from '../Chart';
import Filter from 'components/Filter';
import TableStatistic from 'components/TableStatistic';

import s from './DiagramTab.module.css';

export default function DiagramTab() {
  const dispatch = useDispatch();
  // const totalBalance = useSelector(financeSelectors.totalBalance);

  // const {
  //   expenseStatistic: dataByCategory,
  //   expenseBalance,
  //   incomeBalance,
  // } = useSelector(financeSelectors.dataByCategory);

  const dataStatBal = useSelector(financeSelectors.dataByCategory);

  useEffect(() => {
    dispatch(financeOperations.fetchDataByCategory());
  }, [dispatch]);

  // const expense = expenseBalance;
  // const income = incomeBalance;
  const titles = [
    { key: 1, title: 'Категория' },
    { key: 2, title: 'Сумма' },
  ];
  // const data = [
  //   { id: 1, color: '#FED057', category: 'Kill them all', sum: 2000 },
  //   { id: 2, color: '#FFD8D0', category: 'Kill again', sum: 3000 },
  //   { id: 3, color: '#FD9498', category: 'Kill always', sum: 1500 },
  // ];
  return (
    <>
      <h2 className={s.header}>Статистика</h2>
      <div className={s.wrapper}>
        <div className={s.chart}>
          <div className={s.balance}>
            <span>₴</span>
            {dataStatBal &&
              dataStatBal.incomeBalance - dataStatBal.expenseBalance}
          </div>
          {dataStatBal && <Chart operations={dataStatBal.expenseStatistic} />}
        </div>
        <div className={s.container}>
          <div className={s.filter}>
            <Filter />
          </div>
          {dataStatBal && (
            <TableStatistic
              titles={titles}
              data={dataStatBal.expenseStatistic}
            />
          )}
          <div className={s.holder}>
            <div className={s.result}>
              <span>Расходы:</span>
              <span className={s.costs}>
                {dataStatBal & dataStatBal.expenseBalance.toLocaleString('ru')}
              </span>
            </div>
            <div className={s.result}>
              <span>Доходы:</span>
              <span className={s.income}>
                {dataStatBal && dataStatBal.incomeBalance.toLocaleString('ru')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
