import axios from 'axios';
import url from '../apiBaseUrl';
export const shopList = async () => {
  try {
    const response = await axios.get(`${url}/shops`);
    return response;
  } catch (error) {
    return error;
  }
};
