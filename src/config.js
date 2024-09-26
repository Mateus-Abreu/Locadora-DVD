import axios from 'axios';

 
const API_URL = 'https://66f4416777b5e8897098ef1d.mockapi.io/api/dvds';

export const getDvds = () => axios.get(API_URL);
export const addDvd = (dvd) => axios.post(API_URL, dvd);
export const deleteDvd = (id) => axios.delete(`${API_URL}/${id}`);
