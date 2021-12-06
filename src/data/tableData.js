export const TableTitleData = [
  {
    key: 'date',
    title: 'Дата',
    type: 'date',
    width: 60,
  },
  {
    key: 'transactionType',
    title: 'Тип',
    type: 'boolean',
    width: 120,
  },
  {
    key: 'category',
    title: 'Категория',
    width: 142,
  },
  {
    key: 'comment',
    title: 'Комментарий',
    width: 115,
  },
  {
    key: 'sum',
    title: 'Сумма',
    type: 'number',
    width: 102,
  },
  {
    key: 'balance',
    title: 'Баланс',
    type: 'number',
    width: 107,
  },
];

export const TableData = [
  {
    id: '1',
    date: '04.01.19',
    transactionType: false,
    category: 'Разное',
    comment: 'Подарок жене',
    sum: '300',
    balance: '6 900',
  },
  {
    id: '2',
    date: '05.01.19',
    transactionType: true,
    category: 'Регулярный доход',
    comment: 'Бонус за январь',
    sum: '8 000',
    balance: '14 900',
  },
  {
    id: '3',
    date: '07.01.19',
    transactionType: false,
    category: 'Машина',
    comment: 'Масло',
    sum: '1 000',
    balance: '13 900',
  },
  {
    id: '4',
    date: '07.01.19',
    transactionType: false,
    category: 'Продукты',
    comment: 'Овощи на неделю',
    sum: '280',
    balance: '13 870',
  },
  {
    id: '5',
    date: '07.01.19',
    transactionType: true,
    category: 'Нерегулярный доход',
    comment: 'Подарок на ДР',
    sum: '300',
    balance: '14 870',
  },
];

export const TableAnotherTitleData = [
  {
    key: 'category',
    title: 'Категория',
    type: 'number',
  },
  {
    key: 'sum',
    title: 'Сумма',
  },
];
