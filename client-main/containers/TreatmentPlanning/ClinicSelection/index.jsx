import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ClinicCard from '~/components/cards/ClinicCard';
import InputOptions from '~/components/inputs/InputOptions';
import PlanningSummary from '~/components/PlanningSummary';
import PopUp from '~/components/PopUp';
import SearchBar from '~/components/SearchBar';
import { PlanningContext } from '~/contexts/TreatmentPlanning';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';
import toSlug from '~/utils/toslug';
//
//needed: clinic list ,
//

const rowsPerPage = 15;

const ClinicSelection = () => {
  const { locale } = useRouter();
  const { addQueryParam, removeQueryParam } = useLocalRouter();
  const { values: formikValues, ...formik } = useFormikContext();
  const [
    { clinicsList, treatment, clinicsSearchList },
    {
      getClinicsList,
      getClinicsSearchList,
      resetClinicsSearchList,
      getTreatment,
    },
  ] = useContext(PlanningContext);

  const [scrollId, setScrollId] = useState(null);

  const [searchText, setSearchText] = useState('');

  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  const [currentPagination, setCurrentPagination] = useState(1);

  const [filterParams, setFilterParams] = useState([]);

  //defining the parameters for fetching
  const params = (reset) => {
    console.log(formikValues);
    let value = {
      treatment_id: [formikValues.treatment],
      rows_per_page: rowsPerPage,
      page: reset ? 1 : currentPagination,
      // skip: clinicsList?.data?.length || 0,
    };
    if (formikValues.position) {
      value = {
        ...value,
        position: formikValues.position,
        order: 'distance',
      };
    } else {
      value = { ...value, city_id: formikValues.city };
    }
    setCurrentPagination((p) => (reset ? 2 : p + 1));
    return value;
  };

  useEffect(() => {
    //reseting the selected clinic and scrolling to previesly selected clinic
    if (formikValues.clinic !== null) {
      setScrollId(formikValues.clinic);
      formik.setFieldValue('clinic', null);
      removeQueryParam('clinic');
    } else {
      //geting the clinics list even if it exist
      resetClinicsSearchList();
      !clinicsList.data && getClinicsList(params(true), true);
      setScrollId(-1);
    }
    //getting the treatment info if not exists
    if (
      !treatment ||
      treatment.data === null ||
      treatment.data.id !== formikValues.treatment
    ) {
      getTreatment(formikValues.treatment);
    }
  }, []);

  //when updating the search box text
  useEffect(() => {
    //fetching the whole clincs list if not exists
    if (
      searchText !== '' &&
      !clinicsSearchList.data &&
      !clinicsSearchList.loading
    ) {
      getClinicsSearchList({ treatment_id: [formikValues.treatment] });
    }
  }, [searchText]);

  //triggered when scrolling
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    //fetch new clinics and add them to the list if at the bottom of the page
    if (
      bottom &&
      searchText === '' &&
      !clinicsList.loading &&
      !clinicsList.error &&
      !clinicsList.end &&
      clinicsList?.data?.length > 1
    ) {
      getClinicsList(params());
    }
  };

  // scroll event lisetner
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [clinicsList]);

  //funtion that triger on clinic selection
  const handleClinicSelect = (clinic) => {
    formik.setFieldValue('clinic', clinic);
    formik.handleSubmit();
    addQueryParam('clinic', clinic);
  };

  //return a loading screen if clinic list is fetching
  if (clinicsList.loading && clinicsList.data === null) {
    return <div className=" w-full text-center ">...loading...</div>;
  }

  //return an error if there is an error while fetching
  if (clinicsList.error && clinicsList.data === null) {
    console.log('error: ', clinicsList.error);
    return clinicsList?.error?.response?.status === 400 ? (
      <div className=" w-full text-center ">...no records found...</div>
    ) : (
      <div className=" w-full text-center ">...error...</div>
    );
  }

  return (
    <div>
      {/* sort and filter popUp screen */}
      <PopUp
        visible={filterVisible}
        onReturn={() => {
          setFilterVisible(false);
        }}
      >
        <InputOptions
          center
          options={[
            { value: 1, label: '+1' },
            { value: 2, label: '+2' },
            { value: 3, label: '+3' },
            { value: 4, label: '+4' },
            { value: 5, label: '+5' },
          ]}
          label="rating"
          multiSelection
          selectedValues={filterParams}
          onChange={(v) => {
            console.log(v);
            setFilterParams(v);
          }}
        />
      </PopUp>
      <PopUp
        visible={sortVisible}
        onReturn={() => {
          setSortVisible(false);
        }}
      />

      {/* treatment summary card */}
      {treatment?.data && clinicsList?.data && (
        <PlanningSummary
          treatment={treatment.data.name[locale]}
          location={clinicsList?.data[0]?.city}
        />
      )}
      {/* search bar */}
      <SearchBar
        visible
        defaultValue={searchText}
        placeholder="search by clinic name"
        className=" mt-4 mb-2 "
        searchLeft
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      {/* filter and sort buttons container */}
      {searchText === '' && (
        <div className="flex mb-2">
          {/* filter button */}
          <div className="  w-1/2 h-10 pr-1 ">
            <button
              onClick={() => {
                setFilterVisible(true);
              }}
              type="button"
              className=" rounded-md dis-text-dark font-semibold bg-white w-full h-full "
            >
              filter
            </button>
          </div>
          {/* sorting button */}
          <div className="  w-1/2 h-10 pl-1 ">
            <button
              onClick={() => {
                setSortVisible(true);
              }}
              type="button"
              className=" bg-white w-full h-full rounded-md dis-text-dark font-semibold  "
            >
              sort
            </button>
          </div>
        </div>
      )}
      <div className=" flex flex-col justify-center items-center w-full mb-12">
        {/* return loading and the search list is fetching */}
        {clinicsSearchList?.loading && searchText !== '' && (
          <div className=" w-full text-center ">...loading...</div>
        )}
        {/* search result list */}
        {clinicsSearchList?.data &&
          searchText !== '' &&
          clinicsSearchList.data.map(
            (clinic, index) =>
              toSlug(clinic.name).indexOf(toSlug(searchText)) !== -1 && (
                <ClinicCard
                  onClick={handleClinicSelect}
                  key={index}
                  clinic={clinic}
                  treatmentName={treatment.data.name[locale]}
                />
              )
          )}
        {/* main clinic list */}
        {scrollId &&
          searchText === '' &&
          clinicsList?.data?.map((clinic, index) => (
            <ClinicCard
              scrollOnMount={scrollId === clinic.id}
              onClick={handleClinicSelect}
              key={index}
              clinic={clinic}
            />
          ))}
        {/* loading when fetching new clinics */}
        {clinicsList.loading && clinicsList.data && (
          <div className=" w-full text-center ">...loading...</div>
        )}
        {/* end of list when there is no more clincis */}
        {clinicsList.error && clinicsList.data && (
          <div className=" w-full text-center ">...end of list...</div>
        )}
      </div>
    </div>
  );
};

export default ClinicSelection;
