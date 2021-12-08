import Chart from '../Chart';
import Filter from 'components/Filter';
import TableStatistic from 'components/TableStatistic';

import s from './DiagramTab.module.css';

export default function DiagramTab() {
  const number = 24000;
  const costs = 4568565;
  const income = 9523545;
  const titles = [
    { key: 1, title: 'Категория' },
    { key: 2, title: 'Сумма' },
  ];
  const data = [
    { id: 1, color: '#FED057', category: 'Kill them all', sum: 2000 },
    { id: 2, color: '#FFD8D0', category: 'Kill again', sum: 3000 },
    { id: 3, color: '#FD9498', category: 'Kill always', sum: 1500 },
  ];
  return (
    <>
      <h2 className={s.header}>Статистика</h2>
      <div className={s.wrapper}>
        <div className={s.chart}>
          <div className={s.balance}>
            <span>₴</span> {number.toLocaleString('uk-UA')}.00
          </div>
          <Chart />
        </div>
        <div className={s.container}>
          <div className={s.filter}>
            <Filter />
          </div>
          <TableStatistic titles={titles} data={data} />
          <div className={s.holder}>
            <div className={s.result}>
              <span>Расходы:</span>{' '}
              <span className={s.costs}>
                {costs.toLocaleString('uk-UA')}.00
              </span>
            </div>
            <div className={s.result}>
              <span>Доходы:</span>{' '}
              <span className={s.income}>
                {income.toLocaleString('uk-UA')}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
