import { useRouter } from 'next/router';
import Chevron from '~/components/icons/Chevron';
import words from '~/constants/text/words';
import {
  formatedDate,
  isFuture,
  isToday,
  isTomorrow,
} from '~/functions/dateAndTime';

const DateSelector = ({ date, setDate, loading }) => {
  const { locale } = useRouter();
  const changeDate = (delta) => {
    const newDate = new Date(date.getTime() + delta * 3600 * 1000 * 24);
    if ((isFuture(newDate) || isToday(newDate)) && !loading) {
      setDate(newDate);
    }
  };
  return (
    <div className="flex  items-center w-full dis-text-dark justify-center px-10 my-4">
      <Chevron
        className=" w-5 h-5 rotate-180 "
        onClick={() => {
          changeDate(-1);
        }}
      />
      <div className=" font-semibold text-center  w-1/2 ">
        {isToday(date) || isTomorrow(date)
          ? isToday(date)
            ? words[locale].today
            : words[locale].tomorrow
          : formatedDate(date)}
      </div>
      <Chevron
        className=" w-5 h-5 "
        onClick={() => {
          changeDate(+1);
        }}
      />
    </div>
  );
};

export default DateSelector;
