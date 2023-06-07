
import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { verifyUser } from '../utils/server.calls.js';

const AuthContext = createContext();


// MAIN FUNCTION | CREATE CONTEXT OF AUTHENTIFICATION STATUS TO PASS THROUGH THE APP VIA CONTEXT
const AuthProviderWrapper = ({children}) => {
    
let [isLoggedIn, setIsLoggedIn] = useState(false);
let [isLoading, SetIsLoading] = useState(true);
let [user, setUser] = useState(null);


// SUB-FUNCTION | STORE TOKEN AFTER SUCCESSFUL LOGIN
let storeToken = (token) => {localStorage.setItem('skweezAuthToken', token);};

// SUB-FUNCTION | AUTHENTICATE WHEN REQUIRED AND DECRYPT TOKEN PAYLOAD 
async function authenticate () {

let storedToken = localStorage.getItem('skweezAuthToken');
if (!storedToken) {setIsLoggedIn(false); SetIsLoading(false); setUser(null); return;};
try {
    let response = await verifyUser(storedToken);
    if (response.success) {setIsLoggedIn(true); SetIsLoading(false); setUser(response.user);}
    else {setIsLoggedIn(false); SetIsLoading(false); setUser(null);};
}
catch (error) {console.log(error);};
};

// SUB-FUNCTION | REMOVE TOKEN UPON LOG OUT
let removeToken = () => {localStorage.removeItem('skweezAuthToken');};

// SUB-FUNCTION | LOG OUT
let logOutUser = () => {removeToken(); authenticate();};

useEffect(() => {authenticate()}, []);


return (
    <>
    <AuthContext.Provider value={{isLoggedIn, isLoading, user, storeToken, authenticate, logOutUser}}>
        {children}
    </AuthContext.Provider>
    </>);
};

export { AuthContext, AuthProviderWrapper };