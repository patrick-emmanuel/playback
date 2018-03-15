import axios from 'axios'
axios.defaults.baseURL = 'https://api.example.com';

function handleResponse(response){
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error;
}

export default function request(config){
  return axios(config)
  .then(handleResponse)
}