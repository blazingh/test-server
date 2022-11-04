import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import DoctorCard from '~/components/cards/DoctorCard';
import ClinicDetails from '~/components/ClinicDetails';
import PlanningSummary from '~/components/PlanningSummary';
import { PlanningContext } from '~/contexts/TreatmentPlanning';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';
//
//needed: doctors list, clinic info, treatmnet info
//

const DoctorSelection = () => {
  const { locale } = useRouter();
  const { addQueryParam, removeQueryParam } = useLocalRouter();

  const { values: formikValues, ...formik } = useFormikContext();
  const [
    { doctorsList, clinic, treatment },
    { getDoctorsList, getTreatment, getClinic },
  ] = useContext(PlanningContext);

  const [scrollId, setScrollId] = useState(null);

  //defining the parameters for fetching
  const params = () => {
    let values = {
      treatment_id: [formikValues.treatment],
      clinic_id: formikValues.clinic,
    };

    return values;
  };

  useEffect(() => {
    //reseting the selected doctor
    if (formikValues?.doctor !== null) {
      setScrollId(formikValues.doctor);
      formik.setFieldValue('doctor', null);
      removeQueryParam('doctor');
    } else {
      //getting the doctor list every time
      !doctorsList.loading && getDoctorsList(params());
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
    //getting the clinic info if not exists
    if (
      !clinic ||
      clinic.data === null ||
      clinic.data.id !== formikValues.clinic
    ) {
      getClinic(formikValues.clinic);
    }
  }, []);

  const handleDoctorSelect = (doctor) => {
    formik.setFieldValue('doctor', doctor);
    formik.handleSubmit();
    addQueryParam('doctor', doctor);
  };

  if (
    doctorsList.loading ||
    (doctorsList.data === null && !doctorsList.error)
  ) {
    return <div className=" w-full text-center "> ...loading...</div>;
  }

  if (doctorsList.error) {
    console.log('error: ', doctorsList.error);
    return doctorsList?.error?.response?.status === 400 ? (
      <div className=" w-full text-center ">...no records found...</div>
    ) : (
      <div className=" w-full text-center ">...error...</div>
    );
  }

  return (
    <div>
      {/* treatment summary caard */}
      {treatment?.data && clinic?.data && (
        <PlanningSummary
          treatment={treatment.data.name[locale]}
          location={clinic?.data?.address}
          price="null TL"
          clinic={clinic?.data?.name}
        />
      )}

      {/* clinic details and images card */}
      {clinic.data && (
        <div className=" mt-2 ">
          <ClinicDetails clinic={clinic.data} />
        </div>
      )}
      {/* docotors list */}
      <div className=" flex flex-col justify-center items-center w-full ">
        {scrollId &&
          doctorsList?.data?.map((doctor, index) => (
            <DoctorCard
              key={index}
              doctor={doctor}
              scrollOnMount={scrollId === doctor.id}
              onClick={handleDoctorSelect}
            />
          ))}
      </div>
    </div>
  );
};

export default DoctorSelection;
