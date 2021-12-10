export const dateFormatter = date => {
  const baseDate = new Date(date);
  const day =
    baseDate.getDate() < 10 ? `0${baseDate.getDate()}` : baseDate.getDate();
  const month =
    baseDate.getMonth() < 10 ? `0${baseDate.getMonth()}` : baseDate.getMonth();
  const year = baseDate.getFullYear().toString().slice(2);
  const updatedDate = `${day}.${month}.${year}`;
  return updatedDate;
};

export const createDate = (trDay, trMonth, trYear) => {
  const day = trDay < 10 ? `0${trDay}` : `${trDay}`;
  const updatedDate = `${day}.${trMonth}.${trYear}`;
  return updatedDate;
};

console.log(createDate(9, 12, 2021));

console.log(createDate(25, 12, 2021));
