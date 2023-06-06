
import axios from 'axios';
import { SERVER_URL } from './keys.js';


// SIGN UP | POST @ /auth/signup 
async function createUser (userToCreate) {
try {
    let response = await axios.post(`${SERVER_URL}/auth/signup`, userToCreate);
    console.log(response.data);
    return response.data;}
catch (error) {console.log(error); return (error.response.data);};
};


// LOG IN | POST @ /auth/login
async function connectUser (userToLog) {
try {
    let response = await axios.post(`${SERVER_URL}/auth/login`, userToLog);
    return response.data;}
catch (error) {console.log(error); return (error.response.data);};
};


// VERIFY | GET @ /auth/verify
async function verifyUser (tokenToVerify) {
try {
    let response = await axios.get(`${SERVER_URL}/auth/verify`, {headers: { Authorization: `Bearer ${tokenToVerify}`}});
    return response.data;}
catch (error) {console.log(error); return (error.response.data);};
};

export {createUser, connectUser, verifyUser};