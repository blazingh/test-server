import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import SvgHeart from '~/components/icons/heart';
import { constantDefault } from '~/constants';
import phrases from '~/constants/text/phrases';
import calendar from '~/public/assets/icon/calendar.svg';
import classNames from './styles';

const DoctorCard = ({ doctor, onClick, scrollOnMount }) => {
  const { locale } = useRouter();
  const contRef = useRef(null);
  useEffect(() => {
    if (scrollOnMount) {
      contRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, []);
  return (
    <div className={classNames.DoctorCardContainer} ref={contRef}>
      <div className=" flex ">
        {/* doctor image */}
        <div className={classNames.DoctorCardImage}>
          <Image
            src={
              'https://betaapi.distedavim.com/' +
              doctor.files?.['profile.image']?.[locale]?.[0]?.file
            }
            alt={'doctor'}
            height={100}
            width={100}
            objectFit="contain"
          />
        </div>
        {/* doctor details */}
        <div className={classNames.DoctorCardDetailes}>
          <div>
            {/* doctor name */}
            <div className={classNames.DoctorCardName}>
              {doctor?.degree?.[locale]} {doctor?.name} {doctor?.surname}
            </div>
            {/* docotr branch */}
            <div className={classNames.DoctorCardBranch}>
              {doctor?.branch?.[locale]}
            </div>
          </div>
          {/* doctor languages */}
          <div className=" text-xs md:text-sm font-normal ">
            spoken languages :{' '}
            {doctor?.spoken_languages?.map((lang, index) => (
              <span key={index}>
                {constantDefault.LANGUAGES[lang] || lang}
                {index === doctor.spoken_languages.length - 1 ? '.' : ', '}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* doctor's closest appoitment */}
      <div className={classNames.DoctorCardAppointment}>
        <div className="w-4 h-4 aspect-square ">
          <Image src={calendar} height={15} width={15} alt="calender" />
        </div>
        <div className=" text-gray-500 mx-1 text-xs md:text-sm ">
          {phrases[locale].closestApointment} :{' '}
        </div>
        <div className=" text-blue flex ">{doctor?.availability}</div>
      </div>
      {/* docot favorite */}
      {/* favorite icon */}
      <SvgHeart className={classNames.DoctorCardFavorite} />
      {/* doctor selection button */}
      <div className=" mt-2 h-10 w-full ">
        <button
          onClick={() => {
            onClick(doctor.id);
          }}
          type="button"
          className={classNames.DoctorCardSelectButton}
        >
          {phrases[locale].selectDoctor}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
