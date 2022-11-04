import axios from 'axios';
import { useEffect, useMemo, useReducer } from 'react';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

import { cookies } from '~/functions/cookieHandler';

//action types for the reducer
export const fetchingState = 'FETCHING_STATE';
export const logUser = 'LOG_USER';
export const clearUser = 'CLEAR_USER';

//reducer initial values
const reducerInitialValues = {
  loading: false,
  user: null,
  userToken: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const user = payload.user || state.user || null;
  const userToken = payload.userToken || state.userToken || '';
  switch (type) {
    case fetchingState:
      return {
        ...state,
        loading: payload.loading || false,
        error: payload.error || null,
      };
    case logUser:
      cookies.setToken(userToken);
      cookies.setUser(user);
      return {
        ...state,
        user,
        userToken,
        loading: payload.loading || false,
      };
    case clearUser:
      cookies.clearToken();
      cookies.clearUser();
      return {
        ...state,
        user: null,
        userToken: '',
      };
    default:
      return state;
  }
};

export const StatesAndFuntions = () => {
  const [values, dispatch] = useReducer(reducer, reducerInitialValues);

  //global functions to pass the the context
  const functions = useMemo(
    () => ({
      //sign user's in, get's their info and saves it in the context and the local storage
      signIn: (phone, password, callBack) => {
        dispatch({
          type: fetchingState,
          payload: { loading: true, error: null },
        });
        axios
          .post(apiUrl.user.signIn, { phone, password })
          .then((res) => {
            dispatch({
              type: logUser,
              payload: {
                user: res.data.result.user,
                userToken: res.data.result.token,
                loading: false,
              },
            });
            if (typeof callBack === 'function') {
              callBack();
            }
          })
          .catch((err) => {
            console.log(err);
            dispatch({
              type: fetchingState,
              payload: { error: 'failed to login', loading: false },
            });
          });
      },
      requestSms: (phoneNumber, callBack) => {
        axios
          .post(apiUrl.user.requestSms, { phone: phoneNumber })
          .then((res) => {
            const { result } = res.data;
            callBack({
              id: result.id,
              expire: result.invalidates_at,
              loading: false,
              error: null,
              sent: true,
            });
          })
          .catch(() => {
            callBack({
              id: null,
              expire: null,
              loading: false,
              error: 'message send failed',
              sent: false,
            });
          });
      },
      //sign user up with id: response from sending an sms, code: the sms code sent to the client, password and password_confirmation
      signUp: (params, callBack) => {
        dispatch({
          type: fetchingState,
          payload: { loading: true, error: null },
        });
        axios
          .post(apiUrl.user.signUpSms, params)
          .then((res) => {
            dispatch({
              type: logUser,
              payload: {
                user: res.data.result.user,
                userToken: res.data.result.token,
                loading: false,
              },
            });
            if (typeof callBack === 'function') {
              callBack();
            }
          })
          .catch(() => {
            dispatch({
              type: fetchingState,
              payload: { error: 'failed to sign up', loading: false },
            });
          });
      },
      //sign the user out and clears the user info from the local storage
      signOut: () => {
        dispatch({
          type: clearUser,
          payload: {},
        });
      },
      //function runs on first visit
      //gets saved user info from local storage if exists
      onInit: () => {
        const user = cookies.getUser();
        const userToken = cookies.getToken();
        if (user && userToken) {
          dispatch({
            type: logUser,
            payload: {
              user,
              userToken,
            },
          });
        }
      },
    }),
    []
  );

  useEffect(() => {
    functions.onInit();
  }, []);

  //values == reducer initial values, function = useMemo functions
  return [values, functions];
};
