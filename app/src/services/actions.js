import api from './api';

import { alert } from '../components/Alert';

export const registerDev = async (data) => {
  await api.post('/devs', data).then(() => {
    alert('Alert!', 'Dev Registed :)');
  });
};
