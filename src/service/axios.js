import axios from 'axios';
import { getCookie, deleteCookieName } from '../libs/cookies'

const base = "http://localhost:3001"
let axiosCreate = axios.create({ baseURL: base, crossdomain: true })

axiosCreate.interceptors.request.use(config => {
    const dataCookie = getCookie('token')
    if (dataCookie) config.headers.Authorization = `Bearer ${dataCookie}`
    return config;
});

axiosCreate.interceptors.response.use(
    response => response,
    error => {
        const { status, data } = error.response || {};

        if (status === 401) {
            deleteCookieName('token');
            window.location.href = "/login";
        }

        return Promise.reject(data);
    }
);

export default axiosCreate