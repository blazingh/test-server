import { useEffect, useState } from 'react';

const CountDown = ({ countDown = '02:30', afterCountEnd }) => {
  const [time, setTime] = useState(countDown);
  const [countEnd, setCountEnd] = useState(false);

  const updateTime = () => {
    if (countEnd) return;

    setTime((p) => {
      //convert time to integer
      let min = parseInt(p.split(':')[0]);
      let sec = parseInt(p.split(':')[1]);

      if (sec > 0) {
        //if seconds are more than 0
        sec = sec - 1;
      } else if (min > 0) {
        //if secomds are 0 and minutes are more than 0
        sec = 59;
        min = min - 1;
      } else {
        //if seconds and minutes are 0
        sec = 0;
        min = 0;
        setCountEnd(true);
      }

      //reconvert tiem to string
      min = min < 10 ? `0${min}` : `${min}`;
      sec = sec < 10 ? `0${sec}` : `${sec}`;

      return `${min}:${sec}`;
    });
  };

  useEffect(() => {
    //retunr a callback funtion after the count ends
    if (!countEnd) return;
    if (time != '00:00') return;
    if (typeof afterCountEnd === 'function') {
      afterCountEnd();
    }
  }, [time, countEnd]);

  useEffect(() => {
    //inteval that runs a function every second
    const interval = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{time}</>;
};

export default CountDown;
