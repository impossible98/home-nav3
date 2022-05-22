import axios from 'axios';

const ipInstance = axios.create({
  baseURL: 'https://api.ipify.org?format=json',
  timeout: 1000,
});

export async function ip() {
  const response = await ipInstance.get('/');
  return response.data.ip;
}
