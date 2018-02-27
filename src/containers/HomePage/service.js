import axios from 'axios';
const appCred = {
  id: 271642,
  redirectUrl: 'https://tolocalhost.com/',
  responseType: 'token'
};
const deezerAuthUrl = `https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/auth.php?app_id=${appCred.id}&redirect_uri=${appCred.redirectUrl}&response_type=${appCred.responseType}`;


export function authenticate() {
  return axios({ method: 'post', url: deezerAuthUrl });
}
