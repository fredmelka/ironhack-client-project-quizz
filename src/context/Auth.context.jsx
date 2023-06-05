
import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// FUNCTION | CREATE CONTEXT OF AUTHENTIFICATION STATUS TO PASS THROUGH THE APP VIA CONTEXT
function AuthProviderWrapper ({children}) {
    
let [isLoggedIn, setIsLoggedIn] = useState(false);
let [isLoading, SetIsLoading] = useState(true);
let [user, setUser] = useState(null);

return (
    <>
    <AuthContext.Provider value={{isLoggedIn, isLoading, user}}>
        {children}
    </AuthContext.Provider>
    </>);
};

export { AuthContext, AuthProviderWrapper };