export const constantDefault = {
  isDev: process.env.NODE_ENV !== 'production',

  CLINIC_PANEL: process.env.CLINIC_PANEL || '',

  // Google analytics
  GA_TRACKING_ID: process.env.GA_TRACKING_ID || '',
  GA_TAG_ID: process.env.GA_TAG_ID || '',

  SITE_NAME: 'Diş Tedavim',

  HOST: process.env.WEB_APP_URL || '',

  WEB_APP_URL: process.env.WEB_APP_URL,

  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '',

  TWITTER_USER: '@distedavim',
  PHONE: process.env.PHONE || '0850 606 06 06',
  WHATSAPP: process.env.WHATSAPP || '02162960626',

  // TODO png formatına çevrilmeli SEO için
  LOGO: '/assets/img/logo.svg',
  LOGO_MOBILE: '/assets/img/logo.svg',
  LOGO_AUTH: '/assets/img/logo-login.svg',

  AUTH_TOKEN: '@Auth:token',
  AUTH_USER: '@Auth:user',
  AUTH_FORGOT_PASSWORD: '@Auth:forgotpassword',
  CART_INFO: 'CART_INFO',

  TREATMENT_CART: '@DT:TCart',

  LANGUAGES: {
    en: 'English',
    tr: 'Türkçe',
    de: 'Deutsch',
    ar: 'Arabic',
  },

  CURRENCY_LIST: {
    try: { symbol: '₺', text: 'TL' },
    usd: { symbol: '$', text: 'USD' },
    eur: { symbol: '€', text: 'EU' },
  },

  INITIAL_CURRENCY: 'try',

  PHONE_REG_EXP: /(5)([0-9]){9}/,
  USERNAME_MIN: 2,
  USERNAME_MAX: 30,
  EMAIL_MAX: 50,
  PASSWORD_MAX: 15,
  PASSWORD_MIN: 6,
  CONFIRMATION_CODE_LENGTH: 6,
  ID_NO_LENGHT: 11,
  CARD_NO_MAX: 22,
  CARD_NO_MIN: 18,
  CARD_NAME_MAX: 50,
  CARD_NAME_MIN: 3,
  MAX_FULLNAME: 40,
  MAX_EMAIL: 40,
  MIN_MESSAGE: 10,
  MAX_MESSAGE: 1000,

  INSTANT_CART_PARAM_NAME: 'type',
  INSTANT_CART_TYPE: 'instant',

  CART_TABS: {
    treatmentCart: 'treatmentCart',
    productCart: 'productCart',
  },

  CART_TYPE: {
    normal: 'normal',
    instant: 'instant',
  },

  CONTRACT_PREFIX: 'contract_',

  CART_TOTAL: '@cart_total',

  APPOINTMENT_STATE: {
    0: 'default',
    1: 'patient_arrived',
    2: 'patient_left',
    3: 'cancelled',
    4: 'postponed',
    5: 'skipped',
    6: 'undefined',
  },

  APPOINTMENT_STATE_MESSAGE: {
    default: 'randevu verildi',
    patient_arrived: 'hasta geldi',
    patient_left: 'hasta ayrıldı',
    cancelled: 'iptal',
    postponed: 'ertelendi',
    skipped: 'hasta gelmedi',
    undefined: 'bilinmiyor',
  },

  FAVORITE_PARAMS: '@Fav',
};
