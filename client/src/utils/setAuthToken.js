import axios from 'axios';
import Authenticate from '../utils/Authenticate';

const setAuthToken = token => {
    if (Authenticate(token)) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;