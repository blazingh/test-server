import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APIcheckIfExist } from '~/api/generalAPI';
import WizardFrom from '~/components/FormWizard';
import words from '~/constants/text/words';
import StatesAndFuntions from '~/contexts/TreatmentPlanning/treatmentPlanningContext';
import ClinicSelection from './ClinicSelection';
import DateSelection from './DateSelection';
import DoctorSelection from './DoctorSelection';
import LocationSelection from './LocationSelection';
import PlanReview from './PlanReview';
import TreatmentSelection from './TreatmentSelection';

const TreatmentPlanning = () => {
  const { locale, query, isReady } = useRouter();
  const [initialSteps, setInitialSteps] = useState(null);
  const [initialValues, setInitialValues] = useState(null);

  const preSteps = [
    {
      name: words[locale]?.TreatmentPlaningSteps[1],
      element: <TreatmentSelection />,
    },
    {
      name: words[locale]?.TreatmentPlaningSteps[2],
      element: <LocationSelection />,
    },
    {
      name: words[locale]?.TreatmentPlaningSteps[3],
      element: <ClinicSelection />,
    },
    {
      name: words[locale]?.TreatmentPlaningSteps[4],
      element: <DoctorSelection />,
    },
    {
      name: words[locale]?.TreatmentPlaningSteps[5],
      element: <DateSelection />,
    },
    {
      name: words[locale]?.TreatmentPlaningSteps[6],
      element: <PlanReview />,
    },
  ];

  const preValues = {
    treatment: null,
    position: null,
    city: null,
    clinic: null,
    doctor: null,
  };

  const wizardContext = StatesAndFuntions();

  const [queryValidation, setQueryValidation] = useState({
    error: null,
    done: false,
  });

  //validate the url queries when the router queries are ready
  useEffect(() => {
    if (!isReady) return;
    //if there is no query, start the sequence normaly with all the steps and no data
    if (!query.treatment && !query.location && !query.clinic && !query.doctor) {
      setInitialSteps(preSteps);
      setInitialValues(preValues);
      //validate the queries values if they exist
    } else {
      APIcheckIfExist({ ...query }).then((res) => {
        console.log(res);
        if (Object.keys(query).length === Object.keys(res).length)
          setQueryValidation({ error: null, done: true });
        else setQueryValidation({ error: true, done: null });
      });
    }
  }, [isReady]);

  //when validation is finished
  useEffect(() => {
    if (!queryValidation.done) return;
    //if there is no error in validation
    if (!queryValidation.error) {
      let stepsArray = [];
      let valuesObjects = {};
      //add treatment selection step if there is no treatment id in the url and add id to initial values
      if (query.treatment) valuesObjects.treatment = query.treatment;
      else stepsArray.push(preSteps[0]);

      //add location url to initial values
      if (query.location) valuesObjects.location = query.location;

      //add location step if there no  location nor a treatment
      if (!query.location && !query.city) stepsArray.push(preSteps[1]);

      //add the clinic selection step if there is to clinic id in the url and add id to initial values
      if (query.clinic) valuesObjects.clinic = query.clinic;
      else stepsArray.push(preSteps[2]);

      //adds docotor selection step if there is no docotor is in the url and add id to initial values
      //clinic is needed when a doctor is present
      if (query.doctor && query.clinic) valuesObjects.doctor = query.doctor;
      else stepsArray.push(preSteps[3]);

      //set the initail steps and values
      setInitialSteps([...stepsArray, preSteps[4], preSteps[5]]);
      setInitialValues({ ...preValues, ...valuesObjects });
      //if there is an errror validating start the sequense noramly with all the steps and no data
    } else {
      setInitialSteps(preSteps);
      setInitialValues(preValues);
    }
  }, [queryValidation]);

  return (
    <div className=" w-full max-w-4xl mx-auto ">
      {initialSteps ? (
        <WizardFrom
          urlSteps
          steps={initialSteps}
          context={wizardContext}
          initialValues={initialValues}
        >
          {initialSteps.map((step, index) => (
            <div key={index}>{step.element}</div>
          ))}
        </WizardFrom>
      ) : (
        <div>...loading...</div>
      )}
    </div>
  );
};

export default TreatmentPlanning;
