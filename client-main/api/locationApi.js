import axios from 'axios';
import { apiUrl } from '~/constants/apiUrls/apiUrls';

export const APIgetCityList = async () => {
  try {
    const result = await axios.get(apiUrl.other.AllCitiesList, {
      params: {},
    });
    return result.data.result;
  } catch {
    return null;
  }
};

export const APIgetCityName = async (id) => {
  try {
    const result = await APIgetCityList().then((res) =>
      res.filter((city) => city.id == id)
    );
    return result[0];
  } catch {
    return null;
  }
};
