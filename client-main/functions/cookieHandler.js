import { AUTH_TOKEN, AUTH_USER } from '~/constants';
import { isEmpty } from './objectHelper';

const { parse } = JSON;
const { stringify } = JSON;

//functions for setting, getting and removing cookies, helps prevent errors
export const cookie = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },
  get(key) {
    if (localStorage !== undefined && localStorage.getItem(key))
      return parse(localStorage.getItem(key)) || null;
    if (sessionStorage && sessionStorage.getItem(key))
      return parse(sessionStorage.getItem(key)) || null;

    return null;
  },
  set(key, value, isLocalStorage = true) {
    if (isEmpty(value)) return null;
    if (isLocalStorage && localStorage)
      return localStorage.setItem(key, stringify(value));
    if (sessionStorage) return sessionStorage.setItem(key, stringify(value));

    return null;
  },
};

//specific cookie functions
export const cookies = {
  clearAppStorage() {
    if (localStorage) localStorage.clear();
    if (sessionStorage) sessionStorage.clear();
  },
  setToken(token) {
    return cookie.set(AUTH_TOKEN, token);
  },
  setUser(user) {
    cookie.set(AUTH_USER, stringify(user));
  },
  getToken() {
    return cookie.get(AUTH_TOKEN);
  },
  getUser() {
    return parse(cookie.get(AUTH_USER));
  },
  clearToken() {
    return cookie.clear(AUTH_TOKEN);
  },
  clearUser() {
    return cookie.clear(AUTH_USER);
  },
};
