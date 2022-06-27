import api from './api';

const baseURL = 'https://viacep.com.br/ws/'

const request = {
  get: async (cep: string) => {
    const { data } = await api.get<Response>(`${baseURL}/${cep}/${'json/'}`);
    return data;
}}

export default request;