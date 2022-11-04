import { useRouter } from 'next/router';
import SvgCalendar from '~/components/icons/Calendar';
import SvgClinic from '~/components/icons/Clinic';
import SvgDoctor from '~/components/icons/Doctor';
import SvgPin from '~/components/icons/Pin';
import SvgTooth from '~/components/icons/Tooth';
import words from '~/constants/text/words';

const spanStyle = ' ml-1 font-semibold text-left dis-text-dark dis-text-md ';
const divStyle = 'w-full my-1 flex items-center ';

function PlanningSummary({
  treatment,
  clinic,
  doctor,
  price,
  avgPrice,
  location,
  date,
}) {
  const { locale } = useRouter();
  return (
    <div className=" w-full border mt-4 bg-white border-blue flex flex-col items-center dis-text-dark p-2 rounded ">
      {treatment && (
        <div className={divStyle}>
          <SvgTooth width={16} height={16} className=" shrink-0 " />{' '}
          <span className={spanStyle}>{treatment}</span>
        </div>
      )}
      {clinic && (
        <div className={divStyle}>
          <SvgClinic width={16} height={16} className=" shrink-0 " />{' '}
          <span className={spanStyle}>{clinic}</span>
        </div>
      )}
      {doctor && (
        <div className={divStyle}>
          <SvgDoctor width={16} height={16} className=" shrink-0 " />
          <span className={spanStyle}>{doctor}</span>
        </div>
      )}
      {location && (
        <div className={divStyle}>
          <SvgPin width={16} height={16} className=" shrink-0 " />
          <span className={spanStyle}>{location}</span>
        </div>
      )}
      {date && (
        <div className={divStyle}>
          <SvgCalendar width={16} height={16} className=" shrink-0 " />
          <span className={spanStyle}>{date}</span>
        </div>
      )}
      {(price || avgPrice) && (
        <div className=" w-full flex justify-end ">
          <span>
            {' '}
            {price ? words[locale].price : words[locale].avgPrice}:{' '}
            {price || avgPrice}
          </span>
        </div>
      )}
    </div>
  );
}

export default PlanningSummary;
