const CHANGE_USERNAME = 'CHANGE_USERNAME';

export function changeUsername(username){
  return {
    CHANGE_USERNAME,
    username
  }
}