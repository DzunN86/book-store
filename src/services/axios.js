import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://code.aldipee.com/api/v1',
});

export default instance;
