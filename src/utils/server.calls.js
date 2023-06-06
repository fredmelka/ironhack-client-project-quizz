
import axios from 'axios';
import { SERVER_URL } from './keys.js';


// SIGN UP | REQUEST | POST @ /auth/signup 
async function createUser (userToCreate) {
try {
    let response = await axios.post(`${SERVER_URL}/auth/signup`, userToCreate);
    return response.data.message;}
catch (error) {console.log(error); return (error.response.data.message)};
};

export {createUser};