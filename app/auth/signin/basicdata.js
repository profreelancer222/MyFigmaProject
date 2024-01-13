import axios from 'axios';

const backendUrl = 'http://localhost:8000/api';


export const test = async () => {
  await axios
  .get(backendUrl + '/')
  .then(response => {
      return response.data
  })
  };


