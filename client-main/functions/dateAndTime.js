//format a date objcet to a string
//input: date object
//output: fomrated date string "yyy-mm-dd"
export const formatedDate = (date) => {
  if (typeof date.getMonth !== 'function') return null;

  return `${date?.getFullYear()}-${date?.getMonth() + 1}-${date?.getDate()}`;
};

//check if the given date has passed
//input: date object
//output: bollean || true if the day is past , false if the day is today or later
export const isPast = (date) => {
  if (typeof date.getMonth !== 'function') return null;

  const today = new Date();
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return date < today;
};

//check if the given date has not passed yet
//input: date object
//output: bollean || true if the day is future , false if the day is today or earlier
export const isFuture = (date) => {
  if (typeof date.getMonth !== 'function') return null;

  const today = new Date();
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return date > today;
};

//check if the given date is today
//input: date object
//output: bollean || true if the date is today , false if the date is not today
export const isToday = (date) => {
  if (typeof date.getMonth !== 'function') return null;

  const today = new Date();
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return date.getTime() === today.getTime();
};

//check if the given date is tomorrow
//input: date object
//output: bollean || true if the date is tomorrow , false if the date is not tomorrow
export const isTomorrow = (date) => {
  if (typeof date.getMonth !== 'function') return null;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);

  return date.getTime() === tomorrow.getTime();
};

export const HelperTime = {
  formatedDate,
  isPast,
  isFuture,
  isToday,
  isTomorrow,
};
