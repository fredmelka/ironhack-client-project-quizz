
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
    let response = await service.get(`${SERVER_URL}/auth/verify`);
    return response.data;}
catch (error) {console.log(error); return (error.code !== 'ERR_NETWORK' ? error.response.data : error);};
};

// GET QUESTIONS OF A USER | GET @ /user/profile/questions
async function getQuestionsFromUser (userId) {
try {
    let response = await service.get(`${SERVER_URL}/user/profile/questions`);
    return response.data;}
catch (error) {console.log(error);};
};

// POST NEW QUESTION FROM A USER | POST @ /questions/new
async function createQuestion (questionToCreate) {
try {
    let response = await service.post(`${SERVER_URL}/questions/new`, questionToCreate);
    return response.data;
}
catch (error) {console.log(error);};
};

// DELETE ONE QUESTION FROM A USER | DELETE @ /questions/:_id/delete
async function deleteOneQuestion (questionId)  {
try {
    let response = await service.delete(`${SERVER_URL}/questions/${questionId}/delete`);
    return response.data;
}
catch (error) {console.log(error);};
};

export {createUser, connectUser, verifyUser, getQuestionsFromUser, createQuestion, deleteOneQuestion};