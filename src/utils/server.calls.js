
import axios from 'axios';
import { SERVER_URL } from './keys.js';
import service from './service.js';


// SIGN UP | POST @ /auth/signup 
async function createUser (userToCreate) {
try {
    let response = await axios.post(`${SERVER_URL}/auth/signup`, userToCreate);
    console.log(response.data);
    return response.data;}
catch (error) {console.log(error); return (error.code !== 'ERR_NETWORK' ? error.response.data : error);};
};


// LOG IN | POST @ /auth/login
async function connectUser (userToLog) {
try {
    let response = await axios.post(`${SERVER_URL}/auth/login`, userToLog);
    return response.data;}
catch (error) {console.log(error); return (error.code !== 'ERR_NETWORK' ? error.response.data : error);};
};


// VERIFY | GET @ /auth/verify
async function verifyUser (tokenToVerify) {
try {
    let response = await service.get(`${SERVER_URL}/auth/verify`, {headers: { Authorization: `Bearer ${tokenToVerify}`}});
    return response.data;}
catch (error) {console.log(error); return (error.code !== 'ERR_NETWORK' ? error.response.data : error);};
};

export {createUser, connectUser, verifyUser};