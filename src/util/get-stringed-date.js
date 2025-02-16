//date 를 YYYY-MM-DD형식으로 string 으로 변환
export const getStringedDate = (targetDate) => {
  if (!(targetDate instanceof Date)) {
    targetDate = new Date(targetDate);
  }

  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
