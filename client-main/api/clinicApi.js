/* eslint-disable no-undef */
import axios from 'axios';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

export const APIgetClinictInfo = async (id) => {
  console.log(id);
  try {
    const result = await axios.get(apiUrl.clinic.info, {
      params: { id },
    });
    return result;
  } catch {
    return null;
  }
};
