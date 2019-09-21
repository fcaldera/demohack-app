import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export const dateFormatter = (date, format = 'DD MMM YYYY') => {
  return date ? formatDateLocally(date).format(format) : null;
};

export const formatDateLocally = date => {
  dayjs.extend(utc);

  return dayjs(date)
    .utc()
    .local();
};

export const getDateDifference = ({ current, dateTo, unit = null }) => {
  return dayjs(dateTo).diff(dayjs(current), unit)
}
