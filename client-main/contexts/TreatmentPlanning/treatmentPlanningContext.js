import axios from 'axios';
import { useMemo, useReducer } from 'react';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

import { toArray } from '~/functions/objectHelper';

//action names for the reducer
export const setTreatment = 'SET_TREATMENT_INFO';
export const setClinic = 'SET_CLINIC_INFO';
export const setDoctor = 'SET_DOCTOR_INFO';
export const setGroupsAndTreatmentsList = 'SET_GROUPS_AND_TREATMENTS_LIST';
export const setCitiesList = 'SET_CITIES_LIST';
export const setClinicsList = 'SET_CLINICS_LIST';
export const addToClinicsList = 'ADD_TO_CLINICS_LIST';
export const setClinicsSearchList = 'SET_CLINICS_SEARCH_LIST';
export const setDoctorsList = 'SET_DOCTORS_LIST';
export const setDoctorSchedule = 'SET_SCHEDULE';
export const setLastFetchedDate = 'SET_LAST_FETCHED_DATE';

//reducer initila values
const reducerInitialValues = {
  treatment: { data: null, loading: false, error: false },
  clinic: { data: null, loading: false, error: false },
  doctor: { data: null, loading: false, error: false },
  groupsAndTreatmentsList: { data: null, loading: false, error: false },
  citiesList: { data: null, loading: false, error: false },
  clinicsList: { data: null, loading: false, error: false },
  clinicsSearchList: { data: null, loading: false, error: false },
  doctorsList: { data: null, loading: false, error: false },
  doctorSchedule: { data: null, loading: false, error: false },
  lastFetchedDate: '',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case setTreatment:
      return {
        ...state,
        treatment: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setClinic:
      return {
        ...state,
        clinic: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setDoctor:
      return {
        ...state,
        doctor: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setGroupsAndTreatmentsList:
      return {
        ...state,
        groupsAndTreatmentsList: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setCitiesList:
      return {
        ...state,
        citiesList: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setClinicsList:
      return {
        ...state,
        clinicsList: {
          data: payload?.data?.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case addToClinicsList:
      return {
        ...state,
        clinicsList: {
          data: payload.data
            ? [...state.clinicsList.data, ...payload.data.data]
            : state.clinicsList.data,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setClinicsSearchList:
      return {
        ...state,
        clinicsSearchList: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setDoctorsList:
      return {
        ...state,
        doctorsList: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setDoctorSchedule:
      return {
        ...state,
        doctorSchedule: {
          data: payload.data || null,
          loading: payload.loading || false,
          error: payload.error || false,
        },
      };
    case setLastFetchedDate:
      return {
        ...state,
        lastFetchedDate: payload,
      };
    default:
      return state;
  }
};

const StatesAndFuntions = () => {
  const [values, dispatch] = useReducer(reducer, reducerInitialValues);

  //a template function that is used repeatedly
  const normalFetchDispatch = (type, api, params) => {
    dispatch({
      type,
      payload: { data: null, loading: true, error: false },
    });
    axios
      .get(api, { params })
      .then((res) => {
        dispatch({
          type,
          payload: {
            data: res.data.result,
            loading: false,
            error: false,
          },
        });
      })
      .catch((err) => {
        if (err) {
          dispatch({
            type,
            payload: { data: null, loading: false, error: err },
          });
        }
      });
  };

  //global functions to pass the the context
  const functions = useMemo(
    () => ({
      //gets all the groups and treatment
      getGroupsAndTreatmentsList: (params) => {
        normalFetchDispatch(
          setGroupsAndTreatmentsList,
          apiUrl.treatment.all,
          params
        );
      },
      //gets all cities
      getCitiesList: () => {
        normalFetchDispatch(setCitiesList, apiUrl.other.AllCitiesList);
      },
      //given a treatment_id and clinic_id, gets all docotr for the specified params
      getDoctorsList: (params) => {
        normalFetchDispatch(setDoctorsList, apiUrl.doctor.forPlanning, params);
      },
      //given id, get all the info about the given treatment id
      getTreatment: (id) => {
        normalFetchDispatch(setTreatment, apiUrl.treatment.info, {
          id,
        });
      },
      //given a city_id, treatment_id, and a skip: number for skippin over a number of clinic, gets 10 the clinics for the given params
      getClinicsList: (params, reset) => {
        reset
          ? normalFetchDispatch(
              setClinicsList,
              apiUrl.clinic.forPlaning,
              params
            )
          : normalFetchDispatch(
              addToClinicsList,
              apiUrl.clinic.forPlaning,
              params
            );
      },
      ////given id, get all the info about the given clinic id
      getClinic: (id) => {
        normalFetchDispatch(setClinic, apiUrl.clinic.info, { id });
      },
      ////given id, get all the info about the given doctor id
      getDoctor: (id) => {
        normalFetchDispatch(setDoctor, apiUrl.doctor.info, { id });
      },
      //given a doctor_id , clinc_id and a date "yyy-mm-dd"
      getDoctorSchedule: (params) => {
        dispatch({
          type: setLastFetchedDate,
          payload: params?.date,
        });
        normalFetchDispatch(setDoctorSchedule, apiUrl.doctor.schedule, params);
      },
      //gets all the clinics for the given city_id and treatment_id
      getClinicsSearchList: (params) => {
        dispatch({
          type: setClinicsSearchList,
          payload: { data: null, loading: true, error: false },
        });
        axios
          .get(apiUrl.clinic.forPlaning, { params })
          .then((res) => {
            dispatch({
              type: setClinicsSearchList,
              payload: {
                data: toArray(res.data.result, ['max_price', 'min_price']),
                loading: false,
                error: false,
              },
            });
          })
          .catch((err) => {
            if (err) {
              dispatch({
                type: setClinicsSearchList,
                payload: { data: null, loading: false, error: err },
              });
            }
          });
      },
      //resets the clinicSearchList
      resetClinicsSearchList: () => {
        dispatch({
          type: setClinicsSearchList,
          payload: { data: null, loading: false, error: false },
        });
      },
    }),
    []
  );

  //values == initial values, function = useMemo functions
  return [values, functions];
};

export default StatesAndFuntions;
