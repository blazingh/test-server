import Image from 'next/image';
import { useRouter } from 'next/router';
import ImageSlider from '../ImageSlider';

const ClinicDetails = ({ clinic }) => {
  const { locale } = useRouter();
  console.log(clinic);
  return (
    <div className=" bg-white w-full dis-text-dark p-2 ">
      <div className=" w-full flex ">
        <div className=" h-12 aspect-square rounded ">
          <Image
            width={50}
            height={50}
            src={
              'https://betaapi.distedavim.com/' +
              clinic?.files?.['logo.image']?.[locale]?.[0]?.file
            }
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className=" flex flex-col items-start ml-2 ">
          <span className=" font-semibold text-sm md:text-base ">
            {clinic?.name}
          </span>
          <span className=" font-light text-sm md:text-base">
            {clinic?.clinic_type[locale]}
          </span>
        </div>
      </div>
      <div className=" w-full min-h-96">
        <ImageSlider
          galleryImages={clinic?.files?.['gallery.image']?.[locale]}
          className=" mt-2 rounded-md overflow-hidden "
          showNav
          showBullets
        />
      </div>
    </div>
  );
};

export default ClinicDetails;
