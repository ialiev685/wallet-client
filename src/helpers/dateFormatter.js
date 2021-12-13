export const dateFormatter = date => {
  const baseDate = new Date(date);
  const day =
    baseDate.getDate() < 10 ? `0${baseDate.getDate()}` : baseDate.getDate();
  const month =
    baseDate.getMonth() + 1 < 10
      ? `0${baseDate.getMonth() + 1}`
      : baseDate.getMonth() + 1;
  const year = baseDate.getFullYear().toString().slice(2);
  const updatedDate = `${day}.${month}.${year}`;
  return updatedDate;
};
