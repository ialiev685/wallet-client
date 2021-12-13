import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from 'redux/finance';
import Chart from '../Chart';
import Filter from 'components/Filter';
import TableStatistic from 'components/TableStatistic';

import s from './DiagramTab.module.css';

export default function DiagramTab() {
  const dispatch = useDispatch();

  const dataStatBal = useSelector(financeSelectors.dataByCategory);

  useEffect(() => {
    dispatch(financeOperations.fetchDataByCategory());
  }, [dispatch]);

  const titles = [
    { key: 1, title: 'Категория' },
    { key: 2, title: 'Сумма' },
  ];

  const resultBalance = (
    dataStatBal?.incomeBalance - dataStatBal?.expenseBalance
  )
    .toLocaleString('ru', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/, '.');

  return (
    <>
      <h2 className={s.header}>Статистика</h2>
      <div className={s.wrapper}>
        <div className={s.chart}>
          <div className={s.balance}>
            <span>₴</span>
            {dataStatBal && resultBalance}
          </div>
          {dataStatBal && <Chart operations={dataStatBal?.expenseStatistic} />}
        </div>
        <div className={s.container}>
          <div className={s.filter}>
            <Filter />
          </div>
          {dataStatBal && (
            <TableStatistic
              titles={titles}
              data={dataStatBal?.expenseStatistic}
            />
          )}
          <div className={s.holder}>
            <div className={s.result}>
              <span>Расходы:</span>
              <span className={s.costs}>
                {dataStatBal &&
                  dataStatBal?.expenseBalance
                    .toLocaleString('ru', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                    .replace(/,/, '.')}
              </span>
            </div>
            <div className={s.result}>
              <span>Доходы:</span>
              <span className={s.income}>
                {dataStatBal &&
                  dataStatBal?.incomeBalance
                    .toLocaleString('ru', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                    .replace(/,/, '.')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
