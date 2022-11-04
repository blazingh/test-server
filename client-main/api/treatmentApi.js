/* eslint-disable no-undef */
import axios from 'axios';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

export const APIgetTreatmentInfo = async (id) => {
  try {
    const result = await axios.get(apiUrl.treatment.info, {
      params: { id },
    });
    return result;
  } catch {
    return null;
  }
};
