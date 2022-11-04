const routes = {
  mainPage: '/',
  doctorsList: '/doktorlar',
  clinicsList: '/clinics',
  treatmentPlaning: '/tedavi-olustur',
  profile: '/profil',
  account: '/hesabim',
  signIn: '/hesabim/giris',
  signUp: '/hesabim/uye-olmak',
};

export const authRoutes = [routes.profile];
export const nonAuthRoutes = [routes.account];

export default routes;
