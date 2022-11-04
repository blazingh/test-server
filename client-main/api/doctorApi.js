import axios from 'axios';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

export const APIgetDoctorInfo = async (id) => {
  try {
    const result = await axios.get(apiUrl.doctor.info, {
      params: { id },
    });
    return result;
  } catch {
    return null;
  }
};
