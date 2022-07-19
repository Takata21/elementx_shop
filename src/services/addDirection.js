import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const ENDPOINT = `${API_URL_LOCAL}/addresses`;
async function addDirection(direction) {
  console.log(direction);
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('etx_token'),
    },
    body: JSON.stringify(direction),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default addDirection;
