import { APIgetClinictInfo } from './clinicApi';
import { APIgetDoctorInfo } from './doctorApi';
import { APIgetCityName } from './locationApi';
import { APIgetTreatmentInfo } from './treatmentApi';

export const APIcheckIfExist = async (check) => {
  console.log(check);
  let validationOutput = {};
  if (check.treatment) {
    await APIgetTreatmentInfo(check.treatment).then((res) => {
      if (res) validationOutput.treatment = true;
    });
  }
  if (check.clinic) {
    await APIgetClinictInfo(check.clinic).then((res) => {
      if (res) validationOutput.clinic = true;
    });
  }
  if (check.doctor) {
    await APIgetDoctorInfo(check.doctor).then((res) => {
      if (res) validationOutput.doctor = true;
    });
  }
  if (check.location) {
    if (check.location == 'nearest') validationOutput.location = true;
    else {
      await APIgetCityName(check.location).then((res) => {
        if (res) validationOutput.location = true;
      });
    }
  }

  return validationOutput;
};
