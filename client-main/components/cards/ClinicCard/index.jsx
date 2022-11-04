import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import SvgHeart from '~/components/icons/heart';
import { constantDefault } from '~/constants';
import phrases from '~/constants/text/phrases';
import words from '~/constants/text/words';
import locationPin from '~/public/assets/icon/pin.svg';
import classNames from './styles';
//
// component made specificly for displaying clinic info in treatment planning
// params: clinic: object | containing the clinic data (name, location , treamtnet cost, clinic type)
//          onClick: function | triger on button click returns the clinic id
//          scrollOnMount: bolean | default false. weather the page will scroll to this element on mount or not
//
const ClinicCard = ({ clinic, onClick, scrollOnMount }) => {
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
  const { locale } = useRouter();
  return (
    clinic && (
      <div className={classNames.clinicCardContainer} ref={contRef}>
        {/* favorite icon */}
        <SvgHeart className={classNames.clinicCardFavorite} />
        <div className=" flex ">
          {/* clinic image */}
          <div className={classNames.clinicCardImageCont}>
            <div className={classNames.clinicCardLogo}>
              <Image
                width={50}
                height={50}
                src={
                  'https://api.distedavim.com/' +
                  clinic.files?.['logo.image']?.[locale]?.[0]?.file
                }
                objectFit="cover"
                alt="logo"
              />
            </div>
            <div className={classNames.clinicCardImage}>
              <Image
                width={200}
                height={200}
                objectFit="cover"
                src={
                  'https://api.distedavim.com/' +
                  clinic.files?.['gallery.image']?.[locale]?.[0]?.file
                }
                alt="clinic"
              />
            </div>
          </div>
          {/* clinic details */}
          <div className={classNames.clinicCardDetails}>
            {/* clinic name */}
            <div>{clinic?.name}</div>
            {/* clinic type */}
            <div className=" text-xs md:text-sm font-light my-1 ">
              {clinic?.clinic_type?.[locale]}
            </div>
            {/* clinic languages */}
            <div className=" text-xs md:text-sm font-normal ">
              spoken languages :{' '}
              {clinic?.spoken_languages?.map((lang, index) => (
                <span key={index}>
                  {constantDefault.LANGUAGES[lang] || lang}
                  {index === clinic.spoken_languages.length - 1 ? '.' : ', '}
                </span>
              ))}
            </div>
            <div className="w-full opacity-0">blank space</div>
            {/* treatment price */}
            <div className={classNames.clinicCardPrice}>
              {clinic?.cart_like_list?.summary.readable?.['try'].sales_price ||
                clinic.stock_price + ' TL'}
            </div>
          </div>
        </div>
        {/* clinic location */}
        <div className={classNames.clinicCardMoreDetails}>
          <div className={classNames.clinicCardLocation}>
            <Image
              src={locationPin}
              alt="pin"
              width={15}
              height={15}
              className=" object-contain "
            />
            <span className=" ml-1 ">
              {clinic?.city} / {clinic?.district}
            </span>
          </div>
          {/* clinic reviews */}
          <div className=" underline hover:cursor-pointer ">
            {words[locale].review} ({clinic.review_count || 0})
          </div>
        </div>
        {/* select button */}
        <div className=" mt-2 h-10 w-full ">
          <button
            onClick={() => {
              onClick(clinic.id);
            }}
            type="button"
            className={classNames.clinicCardSelectButton}
          >
            {phrases[locale].selectClinic || ''}
          </button>
        </div>
      </div>
    )
  );
};

export default ClinicCard;
