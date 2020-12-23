import axios from 'axios';

const BASE_URL = '';
const API_KEY = '';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { key: API_KEY };

async function getTrandingMovie() {
  try {
    const data = await axios.get('');
    console.log(data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export default { getTrandingMovie };
