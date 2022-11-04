import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import InputButton from '~/components/inputs/InputButton';
import PlanningSummary from '~/components/PlanningSummary';
import SignInForm from '~/containers/SignInForm';
import SignUpForm from '~/containers/SignUpForm';
import { AuthContext } from '~/contexts/Auth';
import { PlanningContext } from '~/contexts/TreatmentPlanning';

const PlanReview = () => {
  const { locale } = useRouter();
  const [{ user }] = useContext(AuthContext);

  const { values: formikValues } = useFormikContext();
  const [
    { treatment, clinic, doctor },
    { getTreatment, getClinic, getDoctor },
  ] = useContext(PlanningContext);

  useEffect(() => {
    //getting the treatment info if not exists
    if (
      !treatment ||
      treatment.data === null ||
      treatment.data.id !== formikValues.treatment
    ) {
      getTreatment(formikValues.treatment);
    }
    //getting the clinic info if not exists
    if (
      !clinic ||
      clinic.data === null ||
      clinic.data.id !== formikValues.clinic
    ) {
      getClinic(formikValues.clinic);
    }
    //getting the doctor info if not exists
    if (
      !doctor ||
      doctor.data === null ||
      doctor.data.id !== formikValues.doctor
    ) {
      getDoctor(formikValues.doctor);
    }
  }, []);
  return (
    <div>
      <PlanningSummary
        treatment={treatment?.data?.name[locale]}
        clinic={clinic?.data?.name}
        location={clinic?.data?.address}
        date={formikValues?.date}
        doctor={`${doctor?.data?.degree?.[locale]} ${doctor?.data?.name} ${doctor?.data?.surname}`}
        price={'Null TL'}
      />

      {!user && (
        <>
          <div className=" my-4 w-full text-center font-semibold ">
            login or redister to complete / confirm booking
          </div>
          <SignInForm />
          <SignUpForm />
        </>
      )}
      {user && (
        <div className=" mt-2 ">
          <InputButton onClick={() => {}} label={'confirm'} rounded center />
        </div>
      )}
    </div>
  );
};

export default PlanReview;
