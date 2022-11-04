import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PlanningSummary from '~/components/PlanningSummary';
import { PlanningContext } from '~/contexts/TreatmentPlanning';
import { formatedDate } from '~/functions/dateAndTime';
import DateSelector from './DateSelector';
import TimeButton from './TimeButton';
//
//needed: docotr scheddual, doctor info, clinic info, treatment info
//
const DateSelection = () => {
  const { locale } = useRouter();

  const { values: formikValues, ...formik } = useFormikContext();
  const [
    { clinic, treatment, doctor, doctorSchedule, lastFetchedDate },
    { getTreatment, getClinic, getDoctor, getDoctorSchedule },
  ] = useContext(PlanningContext);

  //setting the date to the previes one , or a new date if the previues does not exists
  const [date, setDate] = useState(
    formikValues.date
      ? () => {
          const date = formikValues.date.split(' ')[0].split('-');
          return new Date(date[0], parseInt(date[1]) - 1, date[2]);
        }
      : new Date()
  );

  //setting the parameters for doctor schedule fetching
  const params = () => {
    let values = {
      doctor_id: formikValues.doctor,
      clinic_id: formikValues.clinic,
      date: formatedDate(date),
    };

    return values;
  };

  useEffect(() => {
    //reseting the selected doctor
    if (formikValues?.date !== null) {
      formik.setFieldValue('date', null);
    } else {
      getDoctorSchedule(params());
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
    //getting the doctor info if not exists
    if (
      !doctor ||
      doctor.data === null ||
      doctor.data.id !== formikValues.doctor
    ) {
      getDoctor(formikValues.doctor);
    }
  }, []);

  useEffect(() => {
    //refetching the schedual when the date changes
    if (!doctorSchedule?.loading && lastFetchedDate !== formatedDate(date)) {
      getDoctorSchedule(params());
    }
  }, [date]);

  //funtion for handling time selection
  const handleScheduleSelection = (schedule) => {
    formik.setFieldValue('date', schedule);
    formik.handleSubmit();
  };

  return (
    <div>
      {treatment?.data && (
        <PlanningSummary
          treatment={treatment.data.name[locale]}
          clinic={clinic?.data?.name}
          doctor={`${doctor?.data?.degree?.[locale]} ${doctor?.data?.name} ${doctor?.data?.surname}`}
          location={clinic?.data?.address}
          price={'Null TL'}
        />
      )}
      {/* date selection */}
      <DateSelector
        date={date}
        setDate={setDate}
        loading={doctorSchedule.loading}
      />

      {doctorSchedule.loading && (
        <div className=" w-full text-center "> ...loading...</div>
      )}

      {doctorSchedule?.error && !doctorSchedule.loading && (
        <div className=" w-full text-center ">
          ...no schedule for this day...
        </div>
      )}

      {/* time selection */}
      <div className=" flex flex-wrap max-w-lg mx-auto">
        {doctorSchedule?.data &&
          Object.entries(doctorSchedule.data).map((date, index) => (
            <TimeButton
              key={index}
              date={date}
              onClick={handleScheduleSelection}
            />
          ))}
      </div>
    </div>
  );
};

export default DateSelection;
