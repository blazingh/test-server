const base = process.env.WEB_API_URL;

const user = {
  signIn: base + 'login',
  signUpSms: base + 'register-sms',
  requestSms: base + 'request-sms',
};

const treatment = {
  info: base + 'treatments/plan/single',
  all: base + 'treatments/plan/category/list',
};

const clinic = {
  info: base + 'firm',
  forPlaning: base + 'treatments/plan/clinic_list',
};

const doctor = {
  info: base + 'doctor',
  forPlanning: base + 'treatments/plan/doctor_list',
  schedule: base + 'treatments/plan/availability',
};

const other = {
  AllCitiesList: base + 'cities',
};

export const apiUrl = {
  base,
  user,
  treatment,
  clinic,
  doctor,
  other,
};
