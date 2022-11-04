import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import CityList from '~/components/CityList';
import InputButton from '~/components/inputs/InputButton';
import InputOptions from '~/components/inputs/InputDropDown';
import PlanningSummary from '~/components/PlanningSummary';
import phrases from '~/constants/text/phrases';
import words from '~/constants/text/words';
import { PlanningContext } from '~/contexts/TreatmentPlanning';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';
//
//needed: city list , treatment info
//
const LocationSelection = () => {
  const { locale } = useRouter();
  const { addQueryParam, removeQueryParam } = useLocalRouter();

  const { values: formikValues, ...formik } = useFormikContext();
  const [{ treatment, citiesList }, { getTreatment, getCitiesList }] =
    useContext(PlanningContext);

  const [selectedOption, setSelectedOption] = useState(0);

  const [locationError, setLocationError] = useState('');

  const searchRef = useRef(null);

  const scrollToView = (ref) => {
    setTimeout(() => {
      ref?.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };

  useEffect(() => {
    //reset selected city
    if (formikValues?.city !== null) {
      formik.setFieldValue('city', null);
      removeQueryParam('location');
    }
    //reset location position
    if (formikValues?.position !== null) {
      formik.setFieldValue('position', null);
      removeQueryParam('location');
    }
    //get treatment data if it not exist
    if (
      !treatment ||
      treatment.data === null ||
      treatment.data.id !== formikValues.treatment
    ) {
      getTreatment(formikValues.treatment);
    }
    ///get city list if it not exists
    if (!citiesList || citiesList.data === null) {
      getCitiesList();
    }
  }, []);

  // function that trigger on selection
  const handleCitySelect = (city) => {
    setSelectedOption(0);
    formik.setFieldValue('city', city);
    formik.handleSubmit();
    addQueryParam('location', city);
    console.log(city);
  };

  //funtion for finding client position
  const handleFindNear = () => {
    setLocationError('');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        formik.setFieldValue('position', `${latitude},${longitude}`);
        formik.handleSubmit();
      },
      (err) => {
        setLocationError(
          err.code === 1
            ? 'Please enable location access'
            : 'error getting location'
        );
      }
    );
    addQueryParam('location', 'nearest');
  };

  //return a loading screen if cities list is fetching
  if (citiesList.loading || (citiesList.data === null && !citiesList.error)) {
    return <div className=" w-full text-center "> ...loading...</div>;
  }

  //return an error if there is an error while fetching
  if (citiesList.error) {
    console.log('error: ', citiesList.error);
    return <div className=" w-full text-center ">...error...</div>;
  }
  return (
    <div>
      {/* treatment details container */}
      {treatment?.data && (
        <PlanningSummary treatment={treatment.data.name[locale]} />
      )}
      {/* finding near bt clinic button */}
      <div className=" mt-2 ">
        <InputButton
          rounded
          label={phrases[locale].searchNearMe || ''}
          onClick={handleFindNear}
        />
      </div>

      {!locationError && (
        <div className=" text-red-500 mt-1 ">{locationError}</div>
      )}
      {/*  */}
      <div
        ref={searchRef}
        className="w-full text-center my-4 text-blue font-bold text-lg"
      >
        {words[locale].or}
      </div>
      {/*  */}
      {/* city selector list */}
      <InputOptions
        active={selectedOption === 1}
        onClick={() => {
          setSelectedOption((p) => (p === 1 ? 0 : 1));
        }}
        rounded
        scrollOnClick
        scrollDelay={500}
        text={phrases[locale].selectCity || ''}
      >
        <CityList
          cityList={citiesList.data}
          onClick={() => {
            scrollToView(searchRef);
          }}
          onCitySelect={handleCitySelect}
        />
      </InputOptions>
    </div>
  );
};

export default LocationSelection;
