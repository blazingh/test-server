import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ExpandableText from '~/components/ExpandableText';
import InputButton from '~/components/inputs/InputButton';
import InputOptions from '~/components/inputs/InputDropDown';
import PopUp from '~/components/PopUp';
import paragraphs from '~/constants/text/paragraphs';
import words from '~/constants/text/words';
import { PlanningContext } from '~/contexts/TreatmentPlanning';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const TreatmentSelection = ({ visible }) => {
  console.log('vd ', visible);
  const { locale } = useRouter();
  const { addQueryParam, removeQueryParam } = useLocalRouter();

  const { values: formikValues, ...formik } = useFormikContext();
  const [{ groupsAndTreatmentsList }, { getGroupsAndTreatmentsList }] =
    useContext(PlanningContext);

  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(-1);

  const [popupVisible, setPopupVisibile] = useState(false);

  const params = () => {
    let values = {};
    if (formikValues.clinic) values.clinic_id = formikValues.clinic;
    if (formikValues.doctor) values.doctor_id = formikValues.doctor;
    return values;
  };

  useEffect(() => {
    //reseting the selected treatment
    if (formikValues?.treatment !== null) {
      formik.setFieldValue('treatment', null);
      removeQueryParam('treatment');
    }
    //fetching the treatments groups and list if they do not exist
    if (!groupsAndTreatmentsList || groupsAndTreatmentsList.data === null) {
      getGroupsAndTreatmentsList(params());
    }
  }, []);

  //closing the group list when selecting another options
  useEffect(() => {
    setSelectedGroup(-1);
  }, [selectedOption]);

  //function that run when selecting a treatment
  const handleTreatmentSelection = (treatment) => {
    setSelectedOption(0);
    formik.setFieldValue('treatment', treatment);
    formik.handleSubmit();
    addQueryParam('treatment', treatment);
  };

  const showInfo = () => {
    setPopupVisibile(true);
  };

  //return a loading screen if treamtment list is fetching
  if (
    groupsAndTreatmentsList?.loading ||
    (groupsAndTreatmentsList.data === null && !groupsAndTreatmentsList.erro)
  ) {
    return <div className=" w-full text-center "> ...loading...</div>;
  }

  //return an error if there is an error while fetching
  if (groupsAndTreatmentsList?.error) {
    console.log('error: ', groupsAndTreatmentsList.error);
    return <div className=" w-full text-center ">...error...</div>;
  }

  return (
    <div className="mt-10">
      <PopUp
        visible={popupVisible}
        onReturn={() => setPopupVisibile(false)}
      ></PopUp>
      {/* group selection drop down */}
      <InputOptions
        rounded
        onClick={() => {
          setSelectedOption((p) => (p === 1 ? 0 : 1));
        }}
        text={words[locale].selectTreatment}
        active={selectedOption === 1}
      >
        {/* treatment group list */}
        {groupsAndTreatmentsList?.data?.treatments?.map((group, index) => (
          <InputOptions
            buttonColorIndex={2}
            sizeIndex={2}
            onClick={() => {
              setSelectedGroup((p) => (p === index ? -1 : index));
            }}
            text={group.name[locale]}
            active={selectedGroup === index}
            key={index}
          >
            {/* treatment selection list */}
            {group.treatments.map((treatment, index) => (
              <InputButton
                sizeIndex={2}
                bottomBreak
                buttonColorIndex={6}
                buttonText={words[locale]?.select || ''}
                key={index}
                returnValue={treatment.id}
                label={treatment.name[locale]}
                onClick={handleTreatmentSelection}
                extraLink={'Incele'}
                extraLinkClick={() => showInfo(treatment.is)}
              />
            ))}
          </InputOptions>
        ))}
      </InputOptions>
      {/* // */}
      <div className="w-full text-center my-4 dis-text-dark font-bold dis-text-2xl">
        {words[locale].or}
      </div>
      {/* // */}
      {/* doctor consultation selection */}

      <InputOptions
        rounded
        onClick={() => {
          setSelectedOption((p) => (p === 2 ? 0 : 2));
        }}
        text={words[locale].consultDoctor}
        active={selectedOption === 2}
      >
        {/* consultation option list */}
        {groupsAndTreatmentsList?.data?.special_types?.map(
          (specialType, index) => (
            <InputButton
              sizeIndex={2}
              bottomBreak
              buttonColorIndex={6}
              buttonText={words[locale]?.select || ''}
              key={index}
              returnValue={specialType.id}
              label={specialType.name[locale]}
              onClick={handleTreatmentSelection}
            />
          )
        )}
      </InputOptions>
      {/* important info text */}
      <ExpandableText
        className=" mt-11 px-1 text-sm text-red-500 max-w-xl mx-auto "
        text={paragraphs[locale].treatmentPlaningWarning}
        displayLength={129}
      />
    </div>
  );
};

export default TreatmentSelection;
