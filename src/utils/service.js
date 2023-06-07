
import axios from 'axios';
import { SERVER_URL } from './keys.js';

const storedToken = localStorage.getItem('skweezAuthToken');


// FUNCTION | SERVICE CREATION
const service = axios.create({baseURL: SERVER_URL});

// FUNCTION | INTERCEPTION TO ADD TOKEN IN HEADERS OF REQUEST
service.interceptors.request.use((requestToIntercept) => {

    requestToIntercept.headers.Authorization = `Bearer ${storedToken}`;
    return requestToIntercept;
});

export default service;